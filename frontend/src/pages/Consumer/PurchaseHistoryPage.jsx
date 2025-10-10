import React, { useState } from 'react';
import API from '../../api';

const PurchaseHistoryPage = () => {
  const [consumerCode, setConsumerCode] = useState('');
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setHistory([]);
    try {
        // REAL API CALL
        const { data } = await API.get(`/products/consumer/${consumerCode}`);
        setHistory(data);
        if (data.length === 0) {
            setError('No purchase history found for this consumer code.');
        }
    } catch (err) {
        const errorMsg = err.response?.data?.message || 'Failed to fetch history.';
        setError(errorMsg);
    } finally {
        setIsLoading(false);
    }
  };
  
  return (
    <div className="form-card">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Consumer Purchase History</h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
        <input value={consumerCode} onChange={(e) => setConsumerCode(e.target.value)} placeholder="Enter Your Consumer Code" className="input-style flex-grow" required />
        <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Get History'}
        </button>
      </form>

      {isLoading && <p className="text-center text-slate-500">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {history.length > 0 && (
        <div className="table-wrapper">
          <table>
            <thead><tr><th>Product SN</th><th>Product Name</th><th>Brand</th><th>Manufacturer ID</th></tr></thead>
            <tbody>
              {history.map(p => (<tr key={p._id}><td>{p.productId}</td><td>{p.name}</td><td>{p.brand}</td><td>{p.manufacturerId}</td></tr>))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PurchaseHistoryPage;