import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jsQR from 'jsqr';
import beepSound from '../../assets/beep.wav';

const VerifyProductPage = () => {
  const navigate = useNavigate();
  const [manualProductId, setManualProductId] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [cameraError, setCameraError] = useState('');
  const fileInputRef = useRef(null);

  // Camera refs
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const streamRef = useRef(null);

  // One-shot guard and beep
  const hasNavigatedRef = useRef(false);
  const beepAudio = useMemo(() => new Audio(beepSound), []);

  const navigateOnce = (value) => {
    if (hasNavigatedRef.current) return;
    const normalized = String(value || '').trim();
    if (!normalized) return;
    try { beepAudio.currentTime = 0; beepAudio.play().catch(() => {}); } catch {}
    hasNavigatedRef.current = true;
    navigate(`/consumer/verify/${encodeURIComponent(normalized)}`);
    setTimeout(() => { hasNavigatedRef.current = false; }, 1500);
  };

  // Start camera and scan frames with jsQR
  useEffect(() => {
    let isMounted = true;

    const startCamera = async () => {
      setCameraError('');
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' } },
          audio: false,
        });
        if (!isMounted) {
          // If unmounted before stream resolves, stop tracks
          stream.getTracks().forEach(t => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          const onCanPlay = () => {
            videoRef.current.play().catch(() => {});
            scanLoop();
          };
          if (videoRef.current.readyState >= 2) {
            onCanPlay();
          } else {
            videoRef.current.onloadedmetadata = onCanPlay;
          }
        }
      } catch (err) {
        console.error('Camera access error:', err);
        setCameraError('Unable to access the camera. Please allow camera permissions and ensure no other app is using it.');
      }
    };

    const scanLoop = () => {
      if (!videoRef.current || !canvasRef.current || hasNavigatedRef.current) return;
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const width = video.videoWidth || 640;
      const height = video.videoHeight || 480;

      // Keep canvas in sync but cap size for performance
      const targetW = Math.min(640, width || 640);
      const targetH = Math.min(480, height || 480);
      canvas.width = targetW;
      canvas.height = targetH;

      try {
        ctx.drawImage(video, 0, 0, targetW, targetH);
        const imageData = ctx.getImageData(0, 0, targetW, targetH);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code && code.data) {
          navigateOnce(code.data);
          return; // stop this tick; guard prevents more
        }
      } catch (e) {
        // Ignore frame errors; continue scanning
      }

      rafRef.current = requestAnimationFrame(scanLoop);
    };

    startCamera();

    return () => {
      isMounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
        streamRef.current = null;
      }
    };
  }, [navigateOnce]);

  // Handler for the manual text form submission
  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (manualProductId.trim()) {
      navigateOnce(manualProductId.trim());
    }
  };

  // Handler for the image file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setUploadError('');
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height);
        const imageData = ctx.getImageData(0, 0, image.width, image.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code && code.data) {
          navigateOnce(code.data);
        } else {
          setUploadError('Could not read QR code from the uploaded image. Please try another file.');
        }
      };
      image.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="form-card max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Verify Product Authenticity</h2>
      
      {/* Live Camera Scanner */}
      <div className="border-4 border-emerald-500 rounded-lg overflow-hidden shadow-lg bg-slate-900 aspect-square relative">
        <video ref={videoRef} playsInline muted className="absolute inset-0 w-full h-full object-cover" />
        <canvas ref={canvasRef} className="hidden" />
      </div>
      {cameraError && (
        <p className="mt-2 text-center text-red-600 text-sm">{cameraError}</p>
      )}
      <p className="mt-6 text-center text-slate-500">Point your camera at a QR code</p>

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-slate-300"></div>
        <span className="flex-shrink mx-4 text-slate-500 font-semibold">OR</span>
        <div className="flex-grow border-t border-slate-300"></div>
      </div>

      {/* Manual Entry Form */}
      <form onSubmit={handleManualSubmit} className="space-y-4">
        <div>
          <label htmlFor="productSN" className="block text-sm font-medium text-slate-700 mb-1">Enter Serial Number</label>
          <input 
            id="productSN"
            name="productSN" 
            value={manualProductId}
            onChange={(e) => setManualProductId(e.target.value)}
            placeholder="e.g., PROD001" 
            required 
            className="input-style" 
          />
        </div>
        <button type="submit" className="btn-primary w-full">Verify Manually</button>
      </form>
      
      {/* Image Upload Section */}
      <div className="mt-4">
         <input 
            type="file" 
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button 
            onClick={() => fileInputRef.current.click()} 
            className="btn-secondary w-full"
          >
            Upload QR Code Image
          </button>
          {uploadError && <p className="mt-2 text-sm text-center text-red-600">{uploadError}</p>}
      </div>
    </div>
  );
};

export default VerifyProductPage;