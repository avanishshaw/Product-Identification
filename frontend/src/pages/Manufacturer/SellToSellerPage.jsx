import React, { useState } from 'react';
import API from '../../api';

const SellToSellerPage = () => {
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');
        setIsError(false);

        const formData = new FormData(e.target);
        const productSN = formData.get('productSN');
        const sellerCode = formData.get('sellerCode');

        try {
            // REAL API CALL
            await API.put(`/products/transfer/${productSN}`, {
                newOwnerCode: sellerCode,
                newStatus: 'With Seller'
            });
            setMessage('✅ Product successfully transferred to seller!');
            e.target.reset();
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Transfer failed.';
            setMessage(`❌ ${errorMsg}`);
            setIsError(true);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setMessage(''), 5000);
        }
    };

    return (
        <div className="form-card max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Sell Product to Seller</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                 <input name="productSN" placeholder="Product SN" required className="input-style" />
                 <input name="sellerCode" placeholder="Seller Code" required className="input-style" />
                <button type="submit" className="btn-primary w-full mt-2" disabled={isSubmitting}>
                    {isSubmitting ? 'Transferring...' : 'Transfer Product'}
                </button>
            </form>
            {message && <div className={`mt-4 text-center p-3 rounded-md ${isError ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'}`}>{message}</div>}
        </div>
    );
};

export default SellToSellerPage;