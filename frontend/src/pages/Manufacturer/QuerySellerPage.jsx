// frontend/src/pages/Manufacturer/QuerySellerPage.jsx

import React, { useState } from 'react';
import axios from 'axios';

const QuerySellerPage = () => {
  const [manufacturerId, setManufacturerId] = useState('');
  const [sellers, setSellers] = useState([]);
  const [searched, setSearched] = useState(false);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`http://localhost:5001/api/sellers/manufacturer/${manufacturerId}`);
      setSellers(data);
    } catch (error) {
      console.error('Failed to fetch sellers:', error);
      setSellers([]);
    } finally {
      setSearched(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Query Sellers</h2>
      <form onSubmit={handleSearch} className="flex gap-4 mb-8">
        <input 
          type="text" 
          value={manufacturerId} 
          onChange={(e) => setManufacturerId(e.target.value)}
          placeholder="Enter Your Manufacturer ID" 
          className="input-style flex-grow"
          required 
        />
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg">
          Get Sellers
        </button>
      </form>

      {searched && (
        <div>
          <h3 className="text-2xl font-bold mb-4">Registered Sellers</h3>
          {sellers.length > 0 ? (
            <div className="overflow-x-auto bg-gray-800 rounded-lg">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Brand</th>
                    <th className="p-3">Code</th>
                    <th className="p-3">Manager</th>
                    <th className="p-3">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {sellers.map((seller) => (
                    <tr key={seller._id} className="border-b border-gray-700 hover:bg-gray-700">
                      <td className="p-3">{seller.sellerName}</td>
                      <td className="p-3">{seller.sellerBrand}</td>
                      <td className="p-3">{seller.sellerCode}</td>
                      <td className="p-3">{seller.sellerManager}</td>
                      <td className="p-3">{seller.sellerAddress}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center p-4">No sellers found for this manufacturer ID.</p>
          )}
        </div>
      )}
    </div>
  );
};
export default QuerySellerPage;