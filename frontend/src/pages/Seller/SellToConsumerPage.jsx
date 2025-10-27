import React, { useState } from 'react';
import API from '../../api';

// Define the initial empty state for the form
const initialFormState = {
  productSN: '',
  consumerCode: ''
};

const SellToConsumerPage = () => {
    // We use the initialFormState to set the state
    const [formData, setFormData] = useState(initialFormState);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // This function updates the component's state as you type.
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');
        setIsError(false);

        // We use the data from React's state
        const { productSN, consumerCode } = formData;

        // Log what we are sending for debugging
        console.log('Attempting to sell to consumer:', { productSN, consumerCode });

        try {
            // REAL API CALL to the transfer endpoint
            await API.put(`/products/transfer/${productSN}`, {
                newOwnerCode: consumerCode,
                newStatus: 'Sold' // This is the final status
            });

            setMessage('✅ Product successfully sold to consumer!');
            
            // THE FIX: Reliably reset the form by resetting the React state.
            setFormData(initialFormState);

        } catch (err) {
            // This will correctly display errors like "Product not found"
            const errorMsg = err.response?.data?.message || 'Sale failed.';
            setMessage(`❌ ${errorMsg}`);
            setIsError(true);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setMessage(''), 5000); // Clear the message after 5 seconds
        }
    };

    return (
        <div className="form-card max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Sell Product to Consumer</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                 <input 
                    name="productSN" 
                    value={formData.productSN}  /* Controlled input */
                    onChange={handleChange}
                    placeholder="Product SN" 
                    required 
                    className="input-style" 
                 />
                 <input 
                    name="consumerCode" 
                    value={formData.consumerCode} /* Controlled input */
                    onChange={handleChange}
                    placeholder="Consumer Code (e.g., email or ID)" 
                    required 
                    className="input-style" 
                 />
                <button type="submit" className="btn-primary w-full mt-2" disabled={isSubmitting}>
                    {isSubmitting ? 'Finalizing Sale...' : 'Finalize Sale'}
                </button>
            </form>
            {/* Displays success or error messages from the backend */}
            {message && <div className={`mt-4 text-center p-3 rounded-md ${isError ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'}`}>{message}</div>}
        </div>
    );
};

export default SellToConsumerPage;