import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dummyProducts = [
  { _id: '1', productId: 'PROD001', name: 'SuperWidget X', brand: 'Brand X', price: 100, status: 'With Seller' },
  { _id: '2', productId: 'PROD002', name: 'MegaGadget 2000', brand: 'Brand Y', price: 150, status: 'With Seller' },
  { _id: '3', productId: 'PROD003', name: 'Gizmo Pro', brand: 'Brand X', price: 200, status: 'Sold' },
];

const VerificationResultPage = () => {
    const { productId } = useParams();
    const product = dummyProducts.find(p => p.productId === productId);

    return (
        <div className="card max-w-2xl mx-auto">
             <h2 className="text-2xl font-bold text-white mb-6 text-center">Verification Result</h2>
             {product ? (
                <div className="space-y-4">
                    <div className="text-center p-3 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Product Verified</span>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg space-y-3">
                        <p><strong className="text-slate-400 w-32 inline-block">Product Name:</strong> {product.name}</p>
                        <p><strong className="text-slate-400 w-32 inline-block">Product SN:</strong> {product.productId}</p>
                        <p><strong className="text-slate-400 w-32 inline-block">Brand:</strong> {product.brand}</p>
                        <p><strong className="text-slate-400 w-32 inline-block">Status:</strong> <span className={`${product.status === 'Sold' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-blue-500/20 text-blue-300'} px-2 py-1 rounded-full text-xs`}>{product.status}</span></p>
                    </div>
                </div>
             ) : (
                <div className="text-center p-3 rounded-lg bg-red-600 text-white font-bold flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Product Not Found</span>
                </div>
             )}
             <Link to="/consumer/verify" className="btn-primary mt-6 w-full">Scan Another</Link>
        </div>
    );
};

export default VerificationResultPage;