import React, { useState } from 'react';
import API from '../../api';

// Define the initial empty state for the form
const initialFormState = {
  productSN: '',
  sellerCode: ''
};

const SellToSellerPage = () => {
    const [formData, setFormData] = useState(initialFormState);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Update state as the user types
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');
        setIsError(false);

        // Use the data from the React state
        const { productSN, sellerCode } = formData;

        // Log what we are sending
        console.log('Attempting to transfer product:', { productSN, sellerCode });

        try {
            // REAL API CALL to the transfer endpoint
            await API.put(`/products/transfer/${productSN}`, {
                newOwnerCode: sellerCode,
                newStatus: 'With Seller'
            });
            setMessage('✅ Product successfully transferred to seller!');
            
            // THE FIX: Reliably reset the form by resetting the state
            setFormData(initialFormState);

        } catch (err) {
            // This will now correctly display errors like "Product not found" or "Seller not registered"
            const errorMsg = err.response?.data?.message || 'Transfer failed.';
            setMessage(`❌ ${errorMsg}`);
            setIsError(true);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setMessage(''), 5000); // Clear the message after 5 seconds
        }
    };

    return (
        <div className="form-card max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Sell Product to Seller</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                 <input 
                    name="productSN" 
                    value={formData.productSN}
                    onChange={handleChange}
                    placeholder="Product SN" 
                    required 
                    className="input-style" 
                 />
                 <input 
                    name="sellerCode" 
                    value={formData.sellerCode}
                    onChange={handleChange}
                    placeholder="Seller Code" 
                    required 
                    className="input-style" 
                 />
                <button type="submit" className="btn-primary w-full mt-2" disabled={isSubmitting}>
                    {isSubmitting ? 'Transferring...' : 'Transfer Product'}
                </button>
            </form>
            {message && <div className={`mt-4 text-center p-3 rounded-md ${isError ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'}`}>{message}</div>}
        </div>
    );
};

export default SellToSellerPage;