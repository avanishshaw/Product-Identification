import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Scanner } from '@yudiel/react-qr-scanner'; // Run: npm install @yudiel/react-qr-scanner

const VerifyProductPage = () => {
  const navigate = useNavigate();
  
  const handleScanResult = (result) => {
    if (result) {
      navigate(`/consumer/verify/${result}`);
    }
  };

  return (
    <div className="card max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Scan QR Code</h2>
      <div className="border-4 border-emerald-500 rounded-lg overflow-hidden shadow-lg bg-slate-900 aspect-square">
        <Scanner
          onDecode={handleScanResult}
          onError={(error) => console.log('QR code scan error:', error?.message)}
          styles={{ container: { width: '100%', paddingTop: '100%', position: 'relative' }, video: { position: 'absolute', top: 0, left: 0 } }}
        />
      </div>
      <p className="mt-6 text-center text-slate-400">Point the camera at a product's QR code to verify its authenticity.</p>
    </div>
  );
};

export default VerifyProductPage;