// src/pages/Manufacturer/AddProductPage.jsx
import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    manufacturerID: '', productName: '', productSN: '', productBrand: '', productPrice: ''
  });
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Generating QR Code and sending data to the backend...");

    // 1. Generate QR Code from public API
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${formData.productSN}`;
    setQrCodeUrl(qrUrl);
    
    // 2. TODO: Send POST request to backend
    // This is where the API call will go in the next part.
    // For now, we'll just log it.
    console.log("Submitting to backend:", formData);
    // try {
    //   await axios.post('http://localhost:5001/api/products', formData);
    //   alert('✅ Product added to the database!');
    // } catch (err) {
    //   alert('❌ Failed to add product.');
    // }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="manufacturerID" onChange={handleChange} placeholder="Manufacturer ID" className="input-style" />
          <input name="productName" onChange={handleChange} placeholder="Product Name" className="input-style" />
          <input name="productSN" onChange={handleChange} placeholder="Product SN" className="input-style" />
          <input name="productBrand" onChange={handleChange} placeholder="Product Brand" className="input-style" />
          <input name="productPrice" type="number" onChange={handleChange} placeholder="Product Price" className="input-style" />
        </div>
        <div className="text-center">
          <button type="submit" className="btn-warning">Add the Product</button>
        </div>
      </form>
      {qrCodeUrl && (
        <div className="mt-8 text-center p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl mb-4">Generated QR Code</h3>
          <img src={qrCodeUrl} alt="QR Code" className="mx-auto border-4 border-white"/>
          <button onClick={() => saveAs(qrCodeUrl, `${formData.productSN}.png`)} className="mt-4 btn-warning">
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

// Add these to your src/index.css
// .input-style { @apply w-full p-2 bg-gray-700 border border-gray-600 rounded-md; }
// .btn-warning { @apply bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg; }

export default AddProductPage;