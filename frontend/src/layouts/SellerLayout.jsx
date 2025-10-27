import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const RoleLayout = ({ title, description, navLinks }) => (
    <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
            <p className="mt-2 text-lg text-slate-600">{description}</p>
            
            <div className="mt-8 border-b border-slate-200">
                <nav className="-mb-px flex space-x-6">
                    {navLinks.map(link => (
                        <NavLink 
                          key={link.to} 
                          to={link.to} 
                          className={({ isActive }) => 
                            `whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                              isActive 
                                ? 'border-emerald-500 text-emerald-600' 
                                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                            }`
                          }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
            
            <div className="mt-8">
                <Outlet />
            </div>
        </div>
    </div>
);

const SellerLayout = () => {
    const links = [
        { to: 'sell-to-consumer', label: 'Sell to Consumer' },
        { to: 'query-products', label: 'Products for Sale' },
    ];
    return <RoleLayout 
        title="Seller Portal" 
        description="Manage your inventory and process sales to consumers."
        navLinks={links} 
    />;
};

export default SellerLayout;