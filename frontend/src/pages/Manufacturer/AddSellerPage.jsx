import React, { useState } from 'react';

const AddSellerPage = () => {
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('✅ Seller added successfully! (Simulation)');
        e.target.reset();
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="form-card max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Add New Seller</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input name="SellerName" placeholder="Seller Name" required className="input-style" />
                    <input name="SellerBrand" placeholder="Seller Brand" className="input-style" />
                    <input name="SellerCode" placeholder="Seller Code (Unique)" required className="input-style" />
                    <input name="SellerPhoneNumber" type="tel" placeholder="Seller Phone Number" className="input-style" />
                    <input name="SellerManager" placeholder="Seller Manager" className="input-style" />
                    <input name="SellerAddress" placeholder="Seller Address" required className="input-style" />
                    <input name="ManufacturerId" placeholder="Your Manufacturer ID" required className="input-style" />
                </div>
                <button type="submit" className="btn-primary w-full mt-6">Add Seller</button>
            </form>
            {message && <div className="mt-4 text-center p-3 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">{message}</div>}
        </div>
    );
};

export default AddSellerPage;