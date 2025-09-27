// src/layouts/ManufacturerLayout.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ManufacturerLayout = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Manufacturer Portal</h2>
      <p className="mb-6">Go to the navigation bar to perform operations.</p>
      <nav className="bg-gray-800 rounded-lg p-2 mb-8 flex justify-center space-x-4">
        <NavLink to="/manufacturer/add-product" className="sub-nav-link">Add Product</NavLink>
        <NavLink to="/manufacturer/add-seller" className="sub-nav-link">Add Seller</NavLink>
        <NavLink to="/manufacturer/sell-product" className="sub-nav-link">Sell Product to Seller</NavLink>
        <NavLink to="/manufacturer/query-seller" className="sub-nav-link">Query Seller</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

// Add this class to your src/index.css for reusable sub-navigation link styling
// .sub-nav-link {
//   @apply px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black font-semibold;
// }

export default ManufacturerLayout;