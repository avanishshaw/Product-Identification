import React, { useState } from 'react';
import API from '../../api';

const QueryProductsPage = () => {
  const [sellerCode, setSellerCode] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setProducts([]);
    try {
        // REAL API CALL
        const { data } = await API.get(`/products/seller/${sellerCode}`);
        setProducts(data);
        if (data.length === 0) {
            setError('No products found for this seller code.');
        }
    } catch (err) {
        const errorMsg = err.response?.data?.message || 'Failed to fetch products.';
        setError(errorMsg);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Products For Sale</h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
        <input value={sellerCode} onChange={(e) => setSellerCode(e.target.value)} placeholder="Enter Your Seller Code" className="input-style flex-grow" required />
        <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Get Products'}
        </button>
      </form>

      {isLoading && <p className="text-center text-slate-500">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {products.length > 0 && (
        <div className="table-wrapper">
          <table>
            <thead><tr><th>Product SN</th><th>Name</th><th>Brand</th><th>Price</th><th>Status</th></tr></thead>
            <tbody>
              {products.map(p => (
                <tr key={p._id}>
                  <td>{p.productSN}</td>
                  <td>{p.name}</td>
                  <td>{p.brand}</td>
                  <td>${p.price}</td>
                  <td><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default QueryProductsPage;