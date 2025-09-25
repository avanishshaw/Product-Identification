import React from 'react';
import { Link } from 'react-router-dom';

const ManufacturerPage = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-8">Manufacturer Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/manufacturer/add-product" className="p-6 bg-gray-800 rounded-lg hover:bg-cyan-800 transition">Add Product</Link>
        <Link to="/manufacturer/add-seller" className="p-6 bg-gray-800 rounded-lg hover:bg-cyan-800 transition">Add Seller</Link>
        <Link to="/manufacturer/query-seller" className="p-6 bg-gray-800 rounded-lg hover:bg-cyan-800 transition">Query Seller</Link>
        {/* Add more links like "Sell Product to Seller" here later */}
      </div>
    </div>
  );
};
export default ManufacturerPage;