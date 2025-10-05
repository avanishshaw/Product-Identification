import React, { useState } from 'react';

const SellToSellerPage = () => {
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('✅ Product transferred to seller! (Simulation)');
        e.target.reset();
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="form-card max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Sell Product to Seller</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                 <input name="productSN" placeholder="Product SN" required className="input-style" />
                 <input name="sellerCode" placeholder="Seller Code" required className="input-style" />
                <button type="submit" className="btn-primary w-full mt-2">Transfer Product</button>
            </form>
            {message && <div className="mt-4 text-center p-3 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">{message}</div>}
        </div>
    );
};

export default SellToSellerPage;