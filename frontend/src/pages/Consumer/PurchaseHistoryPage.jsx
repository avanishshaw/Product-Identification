import React, { useState } from 'react';

const dummyPurchaseHistory = [
    { _id: '1', productSN: 'PROD003', sellerCode: 'EHUB1', manufacturerCode: 'MANU-A' },
    { _id: '2', productSN: 'PROD004', sellerCode: 'DDREAMS', manufacturerCode: 'MANU-B' },
];

const PurchaseHistoryPage = () => {
  const [consumerCode, setConsumerCode] = useState('');
  const [history, setHistory] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setHistory(dummyPurchaseHistory);
  };
  
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-white mb-6">Consumer Purchase History</h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
        <input value={consumerCode} onChange={(e) => setConsumerCode(e.target.value)} placeholder="Enter Your Consumer Code" className="input-style flex-grow" />
        <button type="submit" className="btn-primary">Get History</button>
      </form>
      <div className="table-wrapper">
        <table>
          <thead><tr><th>Product SN</th><th>Seller Code</th><th>Manufacturer Code</th></tr></thead>
          <tbody>
            {history.map(p => (<tr key={p._id}><td>{p.productSN}</td><td>{p.sellerCode}</td><td>{p.manufacturerCode}</td></tr>))}
          </tbody>
        </table>
        {history.length === 0 && <p className="p-4 text-center text-slate-400">No history to display. Enter a code and search.</p>}
      </div>
    </div>
  );
};

export default PurchaseHistoryPage;