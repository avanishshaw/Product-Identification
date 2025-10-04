import React from 'react';
import RoleLayout from './RoleLayout';

const ManufacturerLayout = () => {
    const links = [
        { to: 'add-product', label: 'Add Product' },
        { to: 'add-seller', label: 'Add Seller' },
        { to: 'sell-product', label: 'Sell to Seller' },
        { to: 'query-seller', label: 'Query Sellers' },
    ];
    return <RoleLayout 
        title="Manufacturer Portal" 
        description="Manage your products, register sellers, and track your supply chain." 
        navLinks={links} 
    />;
};

export default ManufacturerLayout;