import React, { useState } from 'react';
import API from '../../api'; // Import our API client

const AddSellerPage = () => {
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');
        setIsError(false);

        const formData = new FormData(e.target);
        const sellerData = Object.fromEntries(formData.entries());

        try {
            // REAL API CALL
            await API.post('/sellers', sellerData);
            setMessage('✅ Seller added successfully!');
            e.target.reset();
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Failed to add seller.';
            setMessage(`❌ ${errorMsg}`);
            setIsError(true);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setMessage(''), 5000);
        }
    };

    return (
        <div className="form-card max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Add New Seller</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input name="sellerName" placeholder="Seller Name" required className="input-style" />
                    <input name="sellerBrand" placeholder="Seller Brand" className="input-style" />
                    <input name="sellerCode" placeholder="Seller Code (Unique)" required className="input-style" />
                    <input name="sellerPhoneNumber" type="tel" placeholder="Seller Phone Number" className="input-style" />
                    <input name="sellerManager" placeholder="Seller Manager" className="input-style" />
                    <input name="sellerAddress" placeholder="Seller Address" required className="input-style" />
                    <input name="manufacturerId" placeholder="Your Manufacturer ID" required className="input-style" />
                </div>
                <button type="submit" className="btn-primary w-full mt-6" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Add Seller'}
                </button>
            </form>
            {message && <div className={`mt-4 text-center p-3 rounded-md ${isError ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'}`}>{message}</div>}
        </div>
    );
};

export default AddSellerPage;