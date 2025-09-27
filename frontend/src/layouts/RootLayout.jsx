// src/layouts/RootLayout.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  const activeLinkStyle = {
    color: '#fbbf24', // Amber/Yellow color to match the original design
    borderBottom: '2px solid #fbbf24',
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <header className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-3 text-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-white">
            Product Identification using QR Code
          </h1>
        </div>
        <nav className="bg-gray-700">
          <ul className="container mx-auto px-4 flex justify-center items-center space-x-4 md:space-x-8 text-sm md:text-base font-semibold">
            <li><NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="block py-3 px-2 hover:text-yellow-400">HOME</NavLink></li>
            <li><NavLink to="/manufacturer" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="block py-3 px-2 hover:text-yellow-400">MANUFACTURER</NavLink></li>
            <li><NavLink to="/seller" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="block py-3 px-2 hover:text-yellow-400">SELLER</NavLink></li>
            <li><NavLink to="/consumer" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="block py-3 px-2 hover:text-yellow-400">CONSUMER</NavLink></li>
          </ul>
        </nav>
      </header>
      
      <main className="container mx-auto p-4 md:p-8">
        <Outlet /> {/* Nested routes will be rendered here */}
      </main>
    </div>
  );
};

export default RootLayout;