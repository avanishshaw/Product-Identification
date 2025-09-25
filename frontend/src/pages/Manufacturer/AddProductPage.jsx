// frontend/src/pages/Manufacturer/AddProductPage.jsx (Updated)

import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver'; // npm install file-saver

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    manufacturerId: '', productName: '', productSN: '', productBrand: '', productPrice: ''
  });
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Generate QR code URL
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${formData.productSN}`;
    setQrCodeUrl(qrUrl);
    
    // Create product in backend (you'd need to add a new endpoint or update the existing one)
    try {
      const productData = {
          name: formData.productName,
          productId: formData.productSN,
          brand: formData.productBrand,
          price: Number(formData.productPrice),
          manufacturerId: formData.manufacturerId
      };
      // Assume your product creation endpoint is POST /api/products
      await axios.post('http://localhost:5001/api/products', productData);
      alert('Product Added Successfully!');
    } catch (err) {
      alert('Failed to add product.');
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Add Product</h2>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Form fields from addProduct.html */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="manufacturerId" onChange={handleChange} placeholder="Manufacturer ID" className="input-style"/>
            <input name="productName" onChange={handleChange} placeholder="Product Name" className="input-style"/>
            <input name="productSN" onChange={handleChange} placeholder="Product SN (for QR)" className="input-style"/>
            <input name="productBrand" onChange={handleChange} placeholder="Product Brand" className="input-style"/>
            <input name="productPrice" onChange={handleChange} placeholder="Product Price" type="number" className="input-style"/>
        </div>
        <button type="submit" className="w-full mt-6 bg-cyan-600 text-white font-bold py-3 rounded-lg">
          Add Product & Generate QR
        </button>
      </form>
      {qrCodeUrl && (
        <div className="mt-8 text-center">
            <h3 className="text-xl mb-4">Generated QR Code</h3>
            <img src={qrCodeUrl} alt="QR Code" className="mx-auto border-4 border-white"/>
            <button onClick={() => saveAs(qrCodeUrl, `${formData.productSN}.png`)} className="mt-4 bg-green-600 text-white font-bold py-2 px-6 rounded">
                Download QR Code
            </button>
        </div>
      )}
    </div>
  );
};
export default AddProductPage;