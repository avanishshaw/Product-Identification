// frontend/src/pages/Seller/SellToConsumerPage.jsx

import React, { useState } from 'react';
import axios from 'axios';

const SellToConsumerPage = () => {
  const [productId, setProductId] = useState('');
  const [consumerCode, setConsumerCode] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      const { data } = await axios.put(
        `http://localhost:5001/api/products/transfer/${productId}`,
        {
          newOwnerCode: consumerCode,
          newStatus: 'Sold'
        }
      );
      setMessage(data.message);
      setProductId('');
      setConsumerCode('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Sale failed.');
      setIsError(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Sell Product to Consumer</h2>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">Product SN</label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter Product Serial Number"
            className="input-style"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-bold mb-2">Consumer Code</label>
          <input
            type="text"
            value={consumerCode}
            onChange={(e) => setConsumerCode(e.target.value)}
            placeholder="Enter Consumer Code (e.g., email or ID)"
            className="input-style"
            required
          />
        </div>
        <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-lg">
          Finalize Sale
        </button>
      </form>
      {message && (
        <div className={`mt-4 text-center p-3 rounded-md ${isError ? 'bg-red-500' : 'bg-green-500'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default SellToConsumerPage;