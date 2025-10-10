import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../../api';

const VerificationResultPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            if (!productId) return;
            setIsLoading(true);
            setError('');
            try {
                // REAL API CALL
                const { data } = await API.get(`/products/verify/${productId}`);
                setProduct(data);
            } catch (err) {
                const errorMsg = err.response?.data?.message || 'Verification failed.';
                setError(errorMsg);
                setProduct(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    return (
        <div className="form-card max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Verification Result</h2>
            
            {isLoading ? (
                <p className="text-center text-slate-500">Verifying...</p>
            ) : error ? (
                <div className="text-center p-3 rounded-lg bg-red-100 text-red-800 font-bold flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{error}</span>
                </div>
            ) : product && (
                <div className="space-y-4">
                    <div className="text-center p-3 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Product Verified</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg space-y-3 border">
                        <p><strong className="text-slate-500 w-32 inline-block">Product Name:</strong> {product.name}</p>
                        <p><strong className="text-slate-500 w-32 inline-block">Product SN:</strong> {product.productId}</p>
                        <p><strong className="text-slate-500 w-32 inline-block">Brand:</strong> {product.brand}</p>
                        <p><strong className="text-slate-500 w-32 inline-block">Status:</strong> <span className={`${product.status === 'Sold' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'} px-2 py-1 rounded-full text-xs font-medium`}>{product.status}</span></p>
                        <p><strong className="text-slate-500 w-32 inline-block">Current Owner:</strong> {product.currentOwner}</p>
                    </div>
                </div>
             )}
             <Link to="/consumer/verify" className="btn-primary mt-6 w-full">Scan Another</Link>
        </div>
    );
};

export default VerificationResultPage;