// src/pages/Seller/QueryProductsPage.jsx
import React, { useState } from 'react';

// DUMMY DATA for frontend-first development
const dummyProducts = [
  { _id: '1', productId: 'PROD001', name: 'Product A', brand: 'Brand X', price: 100, status: 'With Seller' },
  { _id: '2', productId: 'PROD002', name: 'Product B', brand: 'Brand Y', price: 150, status: 'With Seller' },
];

const QueryProductsPage = () => {
  const [sellerCode, setSellerCode] = useState('');
  const [products, setProducts] = useState([]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for products for seller: ${sellerCode}`);
    // TODO: Replace with API call
    // For now, just show dummy data
    setProducts(dummyProducts);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products for Sale</h2>
      <form onSubmit={handleSearch} className="flex gap-4 mb-8">
        <input value={sellerCode} onChange={(e) => setSellerCode(e.target.value)} placeholder="Enter Seller Code" className="input-style flex-grow" />
        <button type="submit" className="btn-warning">Submit</button>
      </form>

      <div className="overflow-x-auto bg-gray-800 rounded-lg">
        <table className="min-w-full text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-3">Product SN</th>
              <th className="p-3">Name</th>
              <th className="p-3">Brand</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p._id} className="border-t border-gray-700">
                <td className="p-3">{p.productId}</td>
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.brand}</td>
                <td className="p-3">{p.price}</td>
                <td className="p-3">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QueryProductsPage;