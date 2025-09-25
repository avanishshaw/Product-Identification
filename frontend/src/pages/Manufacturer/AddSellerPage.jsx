// frontend/src/pages/Manufacturer/AddSellerPage.jsx

import React, { useState } from 'react';
import axios from 'axios';

const AddSellerPage = () => {
  const [formData, setFormData] = useState({
    sellerName: '', sellerBrand: '', sellerCode: '', sellerPhoneNumber: '',
    sellerManager: '', sellerAddress: '', manufacturerId: ''
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/sellers/add', formData);
      setMessage('Seller added successfully!');
      setIsError(false);
      // Optionally clear form
      e.target.reset();
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to add seller.');
      setIsError(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Add New Seller</h2>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Simplified form layout for brevity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="sellerName" onChange={handleChange} placeholder="Seller Name" required className="input-style" />
          <input name="sellerBrand" onChange={handleChange} placeholder="Seller Brand" className="input-style" />
          <input name="sellerCode" onChange={handleChange} placeholder="Seller Code" required className="input-style" />
          <input name="sellerPhoneNumber" onChange={handleChange} placeholder="Seller Phone Number" className="input-style" />
          <input name="sellerManager" onChange={handleChange} placeholder="Seller Manager" className="input-style" />
          <input name="sellerAddress" onChange={handleChange} placeholder="Seller Address" required className="input-style" />
          <input name="manufacturerId" onChange={handleChange} placeholder="Your Manufacturer ID" required className="input-style" />
        </div>
        <button type="submit" className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-lg">
          Add the Seller
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

// Add this CSS class to your index.css for cleaner inputs
// .input-style {
//   @apply w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500;
// }

export default AddSellerPage;