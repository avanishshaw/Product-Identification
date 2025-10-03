import React, { useState } from 'react';

// Dummy data for frontend-first development
const dummySellers = [
    { _id: '1', sellerId: 'S001', sellerName: 'ElectroHub', sellerBrand: 'Gadgetron', sellerCode: 'EHUB1', sellerNum: '1234567890', sellerManager: 'John Doe', sellerAddress: '123 Tech Lane' },
    { _id: '2', sellerId: 'S002', sellerName: 'Digital Dreams', sellerBrand: 'NextGen', sellerCode: 'DDREAMS', sellerNum: '0987654321', sellerManager: 'Jane Smith', sellerAddress: '456 Circuit Ave' },
];

const QuerySellerPage = () => {
  const [manufacturerCode, setManufacturerCode] = useState('');
  const [sellers, setSellers] = useState([]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would be an API call. For now, we use dummy data.
    setSellers(dummySellers);
  };

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-white mb-6">Query Sellers</h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
        <input value={manufacturerCode} onChange={(e) => setManufacturerCode(e.target.value)} placeholder="Enter Manufacturer Code" className="input-style flex-grow" />
        <button type="submit" className="btn-primary">Get Sellers</button>
      </form>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Brand</th><th>Code</th><th>Phone</th><th>Manager</th><th>Address</th></tr>
          </thead>
          <tbody>
            {sellers.map((s) => (
              <tr key={s._id}>
                <td>{s.sellerId}</td><td>{s.sellerName}</td><td>{s.sellerBrand}</td>
                <td>{s.sellerCode}</td><td>{s.sellerNum}</td><td>{s.sellerManager}</td><td>{s.sellerAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {sellers.length === 0 && <p className="p-4 text-center text-slate-400">No sellers to display. Enter a code and search.</p>}
      </div>
    </div>
  );
};

export default QuerySellerPage;