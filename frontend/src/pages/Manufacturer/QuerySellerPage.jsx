import React, { useState } from 'react';
import API from '../../api';

const QuerySellerPage = () => {
  const [manufacturerCode, setManufacturerCode] = useState('');
  const [sellers, setSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSellers([]);

    try {
        // REAL API CALL
        const { data } = await API.get(`/sellers/manufacturer/${manufacturerCode}`);
        setSellers(data);
        if (data.length === 0) {
            setError('No sellers found for this manufacturer ID.');
        }
    } catch (err) {
        const errorMsg = err.response?.data?.message || 'Failed to fetch sellers.';
        setError(errorMsg);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Query Sellers</h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
        <input value={manufacturerCode} onChange={(e) => setManufacturerCode(e.target.value)} placeholder="Enter Manufacturer Code" className="input-style flex-grow" required />
        <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Get Sellers'}
        </button>
      </form>
      
      {isLoading && <p className="text-center text-slate-500">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {sellers.length > 0 && (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>ID</th><th>Name</th><th>Brand</th><th>Code</th><th>Phone</th><th>Manager</th><th>Address</th></tr>
            </thead>
            <tbody>
              {sellers.map((s, index) => (
                <tr key={s._id}>
                  <td>{`S${(index + 1).toString().padStart(3, '0')}`}</td>
                  <td>{s.sellerName}</td><td>{s.sellerBrand}</td>
                  <td>{s.sellerCode}</td><td>{s.sellerPhoneNumber}</td><td>{s.sellerManager}</td><td>{s.sellerAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default QuerySellerPage;