// src/pages/ScanPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';

const ScanPage = () => {
  const navigate = useNavigate();

  const handleScanResult = (result, error) => {
    if (!!result) {
      // Assuming the QR code directly contains the product ID
      const productId = result?.text;
      if (productId) {
        navigate(`/verify/${productId}`);
      }
    }

    if (!!error) {
      console.info(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400">Scan Product QR Code</h1>
      <div className="w-full max-w-sm md:max-w-md border-4 border-cyan-500 rounded-lg overflow-hidden shadow-lg">
        <QrReader
          onResult={handleScanResult}
          constraints={{ facingMode: 'environment' }}
          containerStyle={{ width: '100%' }}
        />
      </div>
      <p className="mt-6 text-lg text-gray-300">Point the camera at a QR code to verify the product.</p>
    </div>
  );
};

export default ScanPage;