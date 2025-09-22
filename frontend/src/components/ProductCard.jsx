// src/components/ProductCard.jsx

import React from 'react';

const ProductCard = ({ product, isError, message }) => {
  if (isError) {
    return (
      <div className="w-full max-w-lg p-6 bg-red-900 bg-opacity-50 border border-red-500 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-red-400">Verification Failed</h2>
        <p className="mt-2 text-lg text-red-200">{message}</p>
      </div>
    );
  }
  
  if (!product) return null;

  return (
    <div className="w-full max-w-lg p-6 bg-gray-800 border border-green-500 rounded-lg shadow-md">
      <div className="text-center mb-4">
        <span className="inline-block bg-green-500 text-gray-900 text-sm font-bold px-4 py-1 rounded-full">
          ✓ Verified Authentic
        </span>
      </div>
      <h2 className="text-3xl font-bold text-green-400">{product.name}</h2>
      <p className="text-gray-400 mt-1">Product ID: {product.productId}</p>
      <p className="mt-4 text-gray-200">{product.description}</p>
      <div className="mt-4 border-t border-gray-700 pt-4">
        <p className="text-gray-400">
          Manufacturing Date: 
          <span className="font-medium text-gray-200 ml-2">
            {new Date(product.manufacturingDate).toLocaleDateString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;