import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const RoleLayout = ({ title, navLinks }) => (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
        <h2 className="text-3xl font-bold mb-2 text-white">{title}</h2>
        <p className="mb-6 text-slate-400">Select an action from the menu below to get started.</p>
        <nav className="bg-slate-900/50 rounded-lg p-2 mb-8 flex flex-wrap justify-center gap-2 border border-slate-700">
            {navLinks.map(link => (
                <NavLink 
                  key={link.to} 
                  to={link.to} 
                  className={({ isActive }) => isActive ? "sub-nav-link bg-emerald-600 text-white" : "sub-nav-link text-slate-300"}
                >
                    {link.label}
                </NavLink>
            ))}
        </nav>
        <div className="mt-8">
          <Outlet />
        </div>
    </div>
);

export default RoleLayout;