import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import API from '../../api';

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    manufacturerId: '',
    productName: '',
    productSN: '',
    productBrand: '',
    productPrice: ''
  });
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setQrCodeUrl('');
    setMessage('');
    setIsError(false);

    // Map form fields to match the backend model fields exactly
    const productData = {
      productSN: formData.productSN,
      name: formData.productName,       // Changed from productName to name to match backend
      brand: formData.productBrand,     // Changed from productBrand to brand
      price: Number(formData.productPrice), // Convert to number and change from productPrice to price
      manufacturerId: formData.manufacturerId
    };

    try {
      await API.post('/products', productData);
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${formData.productSN}`;
      setQrCodeUrl(qrUrl);
      setMessage('✅ Product added! You can now scan the QR code to test verification.');
      e.target.reset();
      setFormData({ manufacturerId: '', productName: '', productSN: '', productBrand: '', productPrice: '' });
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Failed to add product.';
      setMessage(`❌ ${errorMsg}`);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="form-card max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* THE FIX: Each `name` attribute now matches the `formData` state keys perfectly. */}
          <input name="manufacturerId" value={formData.manufacturerId} onChange={handleChange} placeholder="Manufacturer ID" className="input-style" required/>
          <input name="productName" value={formData.productName} onChange={handleChange} placeholder="Product Name" className="input-style" required/>
          <input name="productSN" value={formData.productSN} onChange={handleChange} placeholder="Product SN (Unique ID for QR)" className="input-style" required/>
          <input name="productBrand" value={formData.productBrand} onChange={handleChange} placeholder="Product Brand" className="input-style" />
          <input name="productPrice" value={formData.productPrice} type="number" onChange={handleChange} placeholder="Product Price" className="input-style" required/>
        </div>
        <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Add Product & Generate QR'}
        </button>
      </form>
      {message && <div className={`mt-4 text-center p-3 rounded-md ${isError ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'}`}>{message}</div>}
      {qrCodeUrl && (
        <div className="mt-8 text-center p-4 bg-slate-50 rounded-lg border">
          <h3 className="text-xl mb-4 font-semibold text-slate-800">Generated QR Code for: {qrCodeUrl.split('data=')[1]}</h3>
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