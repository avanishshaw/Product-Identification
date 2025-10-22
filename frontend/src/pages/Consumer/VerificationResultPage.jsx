import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import API from '../../api';

const VerificationResultPage = () => {
    const { productSN } = useParams();
    const navigate = useNavigate();
    
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            if (!productSN) {
                setError("No Product SN was provided.");
                setIsLoading(false);
                return;
            }
            
            setIsLoading(true);
            setError('');
            try {
                const { data } = await API.get(`/products/verify/${productSN}`);
                setProduct(data);
                setIsLoading(false);
            } catch (err) {
                console.error('Verification Error:', err);
                const errorMsg = err.response?.data?.message || 'Failed to verify product.';
                setError(errorMsg);
                setProduct(null);
                setIsLoading(false);
                
                // If it's a 404, show a user-friendly message
                if (err.response?.status === 404) {
                    setError(`Product with ID ${productSN} was not found. Please check the product ID and try again.`);
                }
            }
        };

        fetchProduct();
    }, [productSN]);

    const renderStatusBadge = (status) => {
        // ... (this helper function remains the same)
        switch (status) {
            case 'Sold':
                return <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">{status}</span>;
            case 'With Seller':
                return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">{status}</span>;
            case 'With Manufacturer':
                return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">{status}</span>;
            default:
                return <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-xs font-medium">{status}</span>;
        }
    };

    return (
        // The JSX for rendering the result remains the same.
        // The key was fixing the logic that fetches the data.
        <div className="form-card max-w-2xl mx-auto">
             <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Verification Result</h2>
            
            {isLoading ? (
                <div className="text-center text-slate-500">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto"></div>
                    <p className="mt-2">Verifying...</p>
                </div>
            ) : product ? (
                <div className="space-y-4">
                    <div className="text-center p-3 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Product Verified</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg space-y-3 border">
                        <p><strong className="text-slate-500 w-32 inline-block">Product Name:</strong> {product.name}</p>
                        <p><strong className="text-slate-500 w-32 inline-block">Product SN:</strong> {product.productSN}</p>
                        <p><strong className="text-slate-500 w-32 inline-block">Brand:</strong> {product.brand}</p>
                        <p><strong className="text-slate-500 w-32 inline-block">Status:</strong> {renderStatusBadge(product.status)}</p>
                        <p><strong className="text-slate-500 w-32 inline-block">Current Owner:</strong> {product.currentOwner}</p>
                    </div>
                </div>
             ) : (
                <div className="space-y-4">
                    <div className="text-center p-3 rounded-lg bg-red-100 text-red-800 font-bold flex items-center justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{error}</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border text-center">
                        <p className="text-slate-600">The scanned product ID <strong className="text-slate-900">{productSN}</strong> was not found in the database.</p>
                        <p className="mt-2 text-sm text-slate-500">Please ensure you have created this product in the Manufacturer portal first.</p>
                    </div>
                </div>
             )}
             <Link to="/consumer/verify" className="btn-primary mt-6 w-full">Scan Another Product</Link>
        </div>
    );
};

export default VerificationResultPage;