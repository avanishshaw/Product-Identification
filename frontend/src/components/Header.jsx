// frontend/src/components/Header.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // Style for active navigation links
  const activeLinkStyle = {
    color: '#22d3ee', // A bright cyan color
    textDecoration: 'underline',
  };

  return (
    <header className="w-full text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center py-6">
        PRODUCT IDENTIFICATION USING QR CODE
      </h1>
      <nav className="bg-gray-800 py-4">
        <ul className="flex justify-center items-center space-x-6 md:space-x-10 text-sm md:text-lg font-semibold tracking-wider">
          <li>
            <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/manufacturer" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
              MANUFACTURER
            </NavLink>
          </li>
          <li>
            <NavLink to="/seller" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
              SELLER
            </NavLink>
          </li>
          <li>
            <NavLink to="/consumer" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
              CONSUMER
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;