import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';

// Logo component with QR code and shield design
const LogoIcon = () => (
    <svg className="h-8 w-8 text-emerald-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
);

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
            <header className="bg-white sticky top-0 z-50 border-b border-slate-200 shadow-sm">
                <nav className="container mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo and Brand */}
                        <Link to="/" className="flex items-center space-x-3">
                            <LogoIcon />
                            <span className="text-2xl font-bold text-slate-800">AuthentiQR</span>
                        </Link>

                        {/* Main Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <NavLink 
                                to="/manufacturer" 
                                className={({ isActive }) => 
                                    isActive 
                                        ? 'flex items-center space-x-2 text-emerald-600 font-medium' 
                                        : 'flex items-center space-x-2 text-slate-600 hover:text-emerald-600 font-medium transition-colors'
                                }
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>Manufacturer</span>
                            </NavLink>
                            <NavLink 
                                to="/seller" 
                                className={({ isActive }) => 
                                    isActive 
                                        ? 'flex items-center space-x-2 text-emerald-600 font-medium' 
                                        : 'flex items-center space-x-2 text-slate-600 hover:text-emerald-600 font-medium transition-colors'
                                }
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span>Seller</span>
                            </NavLink>
                            <NavLink 
                                to="/consumer" 
                                className={({ isActive }) => 
                                    isActive 
                                        ? 'flex items-center space-x-2 text-emerald-600 font-medium' 
                                        : 'flex items-center space-x-2 text-slate-600 hover:text-emerald-600 font-medium transition-colors'
                                }
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span>Consumer</span>
                            </NavLink>
                        </div>

                        {/* Action Button */}
                        <div className="flex items-center">
                            <Link to="/consumer/verify" className="btn-primary">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                </svg>
                                <span>Scan Product</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;