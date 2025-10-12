// ... (keep the imports and LogoIcon component)
import { NavLink, Outlet, Link } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
            <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
                <nav className="container mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* ... Logo remains the same ... */}
                        <Link to="/" className="flex items-center space-x-2">...</Link>

                        {/* ... Main Navigation remains the same ... */}
                        <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">...</div>

                        {/* THE FIX: Update these links */}
                        <div className="flex items-center space-x-4">
                            <Link to="/login" className="hidden md:block text-slate-600 hover:text-emerald-600 font-medium">Login</Link>
                            <Link to="/signup" className="btn-primary">Get Started</Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;