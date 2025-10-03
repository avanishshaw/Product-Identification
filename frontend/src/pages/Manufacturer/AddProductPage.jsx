import React, { useState } from 'react';
import { saveAs } from 'file-saver'; // Run: npm install file-saver

const AddProductPage = () => {
  const [formData, setFormData] = useState({ manufacturerID: '', productName: '', productSN: '', productBrand: '', productPrice: '' });
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setQrCodeUrl('');
    console.log("Submitting to backend:", formData);
    // Simulate API call
    setTimeout(() => {
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${formData.productSN}`;
      setQrCodeUrl(qrUrl);
      alert('✅ Product added and QR Code generated! (Simulation)');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="card max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="manufacturerID" onChange={handleChange} placeholder="Manufacturer ID" className="input-style" required/>
          <input name="productName" onChange={handleChange} placeholder="Product Name" className="input-style" required/>
          <input name="productSN" onChange={handleChange} placeholder="Product SN (Unique ID)" className="input-style" required/>
          <input name="productBrand" onChange={handleChange} placeholder="Product Brand" className="input-style" />
          <input name="productPrice" type="number" onChange={handleChange} placeholder="Product Price" className="input-style" required/>
        </div>
        <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Generating...' : 'Add Product & Generate QR'}
        </button>
      </form>
      {qrCodeUrl && (
        <div className="mt-8 text-center p-4 bg-slate-900 rounded-lg">
          <h3 className="text-xl mb-4 font-semibold text-white">Generated QR Code</h3>
          <img src={qrCodeUrl} alt="QR Code" className="mx-auto border-4 border-emerald-500 rounded-lg"/>
          <button onClick={() => saveAs(qrCodeUrl, `${formData.productSN}.png`)} className="mt-4 btn-primary">
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProductPage;