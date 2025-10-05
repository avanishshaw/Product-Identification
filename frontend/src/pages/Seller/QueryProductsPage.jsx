import React, { useState } from 'react';

const dummyProducts = [
  { _id: '1', productId: 'PROD001', name: 'SuperWidget X', brand: 'Brand X', price: 100, status: 'With Seller' },
  { _id: '2', productId: 'PROD002', name: 'MegaGadget 2000', brand: 'Brand Y', price: 150, status: 'With Seller' },
];

const QueryProductsPage = () => {
  const [sellerCode, setSellerCode] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setProducts(dummyProducts);
  };

  return (
    <div className="form-card">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Products For Sale</h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
        <input value={sellerCode} onChange={(e) => setSellerCode(e.target.value)} placeholder="Enter Your Seller Code" className="input-style flex-grow" />
        <button type="submit" className="btn-primary">Get Products</button>
      </form>
      <div className="table-wrapper">
        <table>
          <thead><tr><th>Product SN</th><th>Name</th><th>Brand</th><th>Price</th><th>Status</th></tr></thead>
          <tbody>
            {products.map(p => (<tr key={p._id}><td>{p.productId}</td><td>{p.name}</td><td>{p.brand}</td><td>${p.price}</td><td><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">{p.status}</span></td></tr>))}
          </tbody>
        </table>
        {products.length === 0 && <p className="p-4 text-center text-slate-500">No products to display. Enter a code and search.</p>}
      </div>
    </div>
  );
};

export default QueryProductsPage;