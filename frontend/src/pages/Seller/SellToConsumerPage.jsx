import React, { useState } from 'react';

const SellToConsumerPage = () => {
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('✅ Product sold to consumer! (Simulation)');
        e.target.reset();
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="card max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Sell Product to Consumer</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                 <input name="productSN" placeholder="Product SN" required className="input-style" />
                 <input name="consumerCode" placeholder="Consumer Code (e.g., email or ID)" required className="input-style" />
                <button type="submit" className="btn-primary w-full">Finalize Sale</button>
            </form>
            {message && <div className="mt-4 text-center p-3 rounded-md bg-emerald-600 text-white">{message}</div>}
        </div>
    );
};

export default SellToConsumerPage;