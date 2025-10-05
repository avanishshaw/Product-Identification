import React from 'react';
import { Link } from 'react-router-dom';

// --- SVG Icons ---
const ScanIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><path d="M7 12h10"/></svg> );
const ManufacturerIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-emerald-600"><path d="M20 16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10" /><path d="M20 16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" /><path d="M16 4v4" /><path d="M8 4v4" /><path d="M12 4v4" /></svg> );
const SellerIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-emerald-600"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" /><path d="M5 16h14" /><path d="M16 11l2.5 2.5L21 11" /><path d="m16 16 5-5" /></svg> );
const ConsumerIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-emerald-600"><path d="M7 10V7a5 5 0 0 1 10 0v3" /><path d="M17 10h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2" /></svg> );


const HomePage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="text-center py-20 md:py-28">
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tighter">
                    Instant Trust in Every Scan.
                    <span className="block text-emerald-600">Guaranteed.</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
                    AuthentiQR provides an unbroken chain of trust from factory floor to your front door. Verify product authenticity with a simple QR scan.
                </p>
                <div className="mt-10 flex justify-center items-center gap-x-4">
                    <Link to="/consumer/verify" className="btn-primary shadow-lg shadow-emerald-500/20 px-6 py-3 rounded-lg font-semibold">
                        <ScanIcon />
                        <span>Scan a Product Now</span>
                    </Link>
                    <Link to="/manufacturer" className="btn-secondary px-6 py-3 rounded-lg font-semibold">
                        Business Portal
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white border-y border-slate-200">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Everything You Need to Track Authenticity</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                            Powerful features designed for every link in the supply chain.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        <div className="feature-card text-center">
                            <div className="inline-block bg-emerald-100 p-4 rounded-xl"> <ManufacturerIcon /> </div>
                            <h3 className="mt-4 text-xl font-bold text-slate-900">For Manufacturers</h3>
                            <p className="mt-2 text-slate-600">Generate unique, secure QR codes for each product at the source and start its verifiable journey.</p>
                        </div>
                        <div className="feature-card text-center">
                            <div className="inline-block bg-emerald-100 p-4 rounded-xl"> <SellerIcon /> </div>
                            <h3 className="mt-4 text-xl font-bold text-slate-900">For Sellers</h3>
                            <p className="mt-2 text-slate-600">Receive and transfer product ownership with a simple scan, maintaining a clear chain of custody.</p>
                        </div>
                        <div className="feature-card text-center">
                            <div className="inline-block bg-emerald-100 p-4 rounded-xl"> <ConsumerIcon /> </div>
                            <h3 className="mt-4 text-xl font-bold text-slate-900">For Consumers</h3>
                            <p className="mt-2 text-slate-600">Scan any code to instantly verify a product's origin and confirm you're buying the real deal.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;