import React from 'react';
import RoleLayout from './RoleLayout';

const SellerLayout = () => {
    const links = [
        { to: 'sell-product', label: 'Sell to Consumer' },
        { to: 'query-products', label: 'Products for Sale' },
    ];
    return <RoleLayout title="Seller Portal" navLinks={links} />;
};

export default SellerLayout;