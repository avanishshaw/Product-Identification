import React from 'react';
import RoleLayout from './RoleLayout';

const ConsumerLayout = () => {
    const links = [
        { to: 'verify', label: 'Verify Product' },
        { to: 'history', label: 'Purchase History' },
    ];
    return <RoleLayout title="Consumer Portal" navLinks={links} />;
};

export default ConsumerLayout;