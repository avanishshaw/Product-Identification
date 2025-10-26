import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scanner } from '@yudiel/react-qr-scanner';
import jsQR from 'jsqr';

const VerifyProductPage = () => {
  const navigate = useNavigate();
  const [manualProductId, setManualProductId] = useState('');
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);

  // Handler for the live camera scanner result
  const handleScanResult = (result) => {
    console.log('QR code scanned:', result);
    if (result) {
      navigate(`/consumer/verify/${result}`);
    }
  };

  // Handler for the manual text form submission
  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (manualProductId.trim()) {
      navigate(`/consumer/verify/${manualProductId.trim()}`);
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
          navigate(`/consumer/verify/${code.data}`);
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
      <div className="border-4 border-emerald-500 rounded-lg overflow-hidden shadow-lg bg-slate-900 aspect-square">
        <Scanner
          // defensive wrapper: log raw result and normalize to a string before passing to handler
          onDecode={(result) => {
            console.log('Scanner onDecode raw:', result);
            try {
              const value = result?.text ?? result;
              if (typeof value === 'string') {
                // pass normalized string
                handleScanResult(value);
              } else if (value && typeof value === 'object') {
                const maybe = value?.data ?? value?.code ?? value?.rawData ?? JSON.stringify(value);
                handleScanResult(maybe);
              }
            } catch (err) {
              console.error('Error processing decode result', err);
            }
          }}
          onError={(error) => console.error('QR code scan error:', error)}
          // use prop names compatible with v2.x and ensure the video is centered
          containerStyle={{ width: '100%', paddingTop: '100%', position: 'relative' }}
          videoStyle={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center center', backgroundColor: 'black' }}
          // prefer environment (rear) camera when available
          videoConstraints={{ facingMode: 'environment' }}
        />
      </div>
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