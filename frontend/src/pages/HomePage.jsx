import React from 'react';

// --- SVG Icons (for demonstration in a single file) ---

const LogoIcon = () => (
    <svg className="h-8 w-8 text-emerald-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8zM9 9h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z" />
    </svg>
);

const ScanIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 4h4v4H4z" /><path d="M16 4h4v4h-4z" /><path d="M4 16h4v4H4z" /><path d="M16 16h4v4h-4z" /><path d="M9 4v1" /><path d="M15 4v1" /><path d="M9 20v-1" /><path d="M15 20v-1" /><path d="M4 9h1" /><path d="M4 15h1" /><path d="M20 9h-1" /><path d="M20 15h-1" /><path d="M9 10h6" /><path d="M9 14h6" />
    </svg>
);

const ManufacturerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M20 16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10" /><path d="M20 16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" /><path d="M16 4v4" /><path d="M8 4v4" /><path d="M12 4v4" /></svg>
);

const SellerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" /><path d="M5 16h14" /><path d="M16 11l2.5 2.5L21 11" /><path d="m16 16 5-5" /></svg>
);

const ConsumerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M7 10V7a5 5 0 0 1 10 0v3" /><path d="M17 10h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2" /></svg>
);

// --- Individual Section Components ---

const Header = () => (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <nav className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <a href="#" className="flex items-center space-x-2">
                    <LogoIcon />
                    <span className="text-2xl font-bold text-slate-800">AuthentiQR</span>
                </a>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-slate-600 hover:text-emerald-600 font-medium">Dashboard</a>
                    <a href="#" className="text-slate-600 hover:text-emerald-600 font-medium">For Consumers</a>
                    <a href="#" className="text-slate-600 hover:text-emerald-600 font-medium">For Businesses</a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="hidden md:block text-slate-600 hover:text-emerald-600 font-medium">Login</a>
                    <a href="#" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-sm transition-colors">Get Started</a>
                </div>
            </div>
        </nav>
    </header>
);

const HeroSection = () => (
    <section className="py-20 md:py-32 text-center hero-gradient">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tighter">
            Instant Trust in Every Scan.
            <span className="block text-emerald-600">Guaranteed.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
            Discover, organize, and share your favorite movies and TV shows. Join thousands of cinema enthusiasts in building the ultimate media collection.
        </p>
        <div className="mt-10 flex justify-center items-center gap-x-4">
            <a href="#" className="btn-primary shadow-lg shadow-emerald-500/20 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2">
                <ScanIcon />
                <span>Scan a Product</span>
            </a>
            <a href="#" className="btn-secondary px-6 py-3 rounded-lg font-semibold">
                Business Portal
            </a>
        </div>
    </section>
);

const FeaturesSection = () => (
    <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Everything you need to track authenticity</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                    Powerful features designed for every link in the supply chain.
                </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
                <div className="feature-card bg-slate-50 rounded-xl p-8 border border-slate-200">
                    <div className="inline-block bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                        <ManufacturerIcon />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">For Manufacturers</h3>
                    <p className="mt-2 text-slate-600">Generate unique, secure QR codes for each product at the source and start its verifiable journey.</p>
                </div>
                <div className="feature-card bg-slate-50 rounded-xl p-8 border border-slate-200">
                    <div className="inline-block bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                        <SellerIcon />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">For Sellers</h3>
                    <p className="mt-2 text-slate-600">Receive and transfer product ownership with a simple scan, maintaining a clear chain of custody.</p>
                </div>
                <div className="feature-card bg-slate-50 rounded-xl p-8 border border-slate-200">
                    <div className="inline-block bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                        <ConsumerIcon />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">For Consumers</h3>
                    <p className="mt-2 text-slate-600">Scan any code to instantly verify a product's origin and confirm you're buying the real deal.</p>
                </div>
            </div>
        </div>
    </section>
);


// --- MAIN HOME PAGE COMPONENT ---

const HomePage = () => {
    return (
        <>
            <style>{`
                .hero-gradient {
                    background: radial-gradient(circle at 50% 0%, white 0%, #f8fafc 100%);
                }
                .feature-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .feature-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }
            `}</style>
            
            {/* NOTE: Normally, these components would be in their own files.
                They are combined here for easy review as requested.
            */}
            
            <Header />
            <HeroSection />
            <FeaturesSection />
        </>
    );
};

export default HomePage;