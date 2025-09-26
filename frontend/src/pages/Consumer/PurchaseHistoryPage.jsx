// frontend/src/pages/Consumer/PurchaseHistoryPage.jsx

import React, { useState } from 'react';
import axios from 'axios';

const PurchaseHistoryPage = () => {
  const [consumerCode, setConsumerCode] = useState('');
  const [products, setProducts] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // We'll use the new endpoint to fetch products by consumer code
      const { data } = await axios.get(`http://localhost:5001/api/products/consumer/${consumerCode}`);
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch purchase history:', error);
      setProducts([]);
    } finally {
      setSearched(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Consumer Product History</h2>
      <form onSubmit={handleSearch} className="flex gap-4 mb-8">
        <input 
          type="text"
          value={consumerCode}
          onChange={(e) => setConsumerCode(e.target.value)}
          placeholder="Enter Consumer Code" 
          className="input-style flex-grow" 
          required
        />
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg">
          Get Products
        </button>
      </form>

      {searched && (
        <div>
          <h3 className="text-2xl font-bold mb-4">Products Purchased</h3>
          {products.length > 0 ? (
            <div className="overflow-x-auto bg-gray-800 rounded-lg">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-3">Product SN</th>
                    <th className="p-3">Product Name</th>
                    <th className="p-3">Brand</th>
                    <th className="p-3">Manufacturer ID</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="border-b border-gray-700 hover:bg-gray-700">
                      <td className="p-3">{product.productId}</td>
                      <td className="p-3">{product.name}</td>
                      <td className="p-3">{product.brand}</td>
                      <td className="p-3">{product.manufacturerId}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center p-4">No purchase history found for this consumer code.</p>
          )}
        </div>
      )}
    </div>
  );
};
export default PurchaseHistoryPage;