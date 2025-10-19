import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';

const LogoIcon = () => (
    <svg className="h-8 w-8 text-emerald-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8zM9 9h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z" />
    </svg>
);

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
                <nav className="container mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center space-x-2">
                            <LogoIcon />
                            <span className="text-2xl font-bold text-slate-800">AuthentiQR</span>
                        </Link>
                        <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
                            <NavLink to="/manufacturer" className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600'}>Manufacturer</NavLink>
                            <NavLink to="/seller" className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600'}>Seller</NavLink>
                            <NavLink to="/consumer" className={({ isActive }) => isActive ? 'text-emerald-600' : 'hover:text-emerald-600'}>Consumer</NavLink>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="btn-primary">Get Started</a>
                        </div>
                    </div>
                </nav>
            </header>
            
            <main>
                <Outlet /> {/* All other pages will render inside here */}
            </main>
        </div>
    );
};

export default RootLayout;