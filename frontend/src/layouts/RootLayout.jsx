import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <header className="bg-slate-800/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-700">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <Link to="/" className="flex items-center space-x-2">
                    <svg className="h-8 w-8 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8zM9 9h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"/></svg>
                    <span className="text-2xl font-bold text-white">AuthentiQR</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-1">
                    <NavLink to="/manufacturer" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-300 hover:bg-slate-700'}`}>Manufacturer</NavLink>
                    <NavLink to="/seller" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-300 hover:bg-slate-700'}`}>Seller</NavLink>
                    <NavLink to="/consumer" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-300 hover:bg-slate-700'}`}>Consumer</NavLink>
                </nav>
                <div className="flex items-center space-x-4">
                    <a href="#" className="hidden md:block text-slate-300 hover:text-emerald-400 font-medium text-sm">Login</a>
                    <a href="#" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-semibold text-sm transition-colors">Get Started</a>
                </div>
            </div>
        </div>
      </header>
      <main className="container mx-auto p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;