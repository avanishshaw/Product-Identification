import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        try {
            const { data } = await API.post('/users/login', formData);
            // On successful login, you would typically save the user data/token
            // For now, we'll just log it and redirect based on role.
            console.log('Login successful:', data);
            alert(`Welcome, ${data.name}! You are logged in as a ${data.role}.`);
            
            // Redirect based on user role
            switch (data.role) {
                case 'Manufacturer':
                    navigate('/manufacturer');
                    break;
                case 'Seller':
                    navigate('/seller');
                    break;
                case 'Consumer':
                    navigate('/consumer');
                    break;
                default:
                    navigate('/'); // Default redirect to home
            }
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Login failed. Please check your credentials.';
            setError(errorMsg);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center items-center py-12 px-4">
            <div className="form-card w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">Welcome Back</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input type="email" name="email" id="email" onChange={handleChange} className="input-style" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <input type="password" name="password" id="password" onChange={handleChange} className="input-style" required />
                    </div>
                    {error && <p className="text-red-600 text-sm text-center">{error}</p>}
                    <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Logging In...' : 'Login'}
                    </button>
                </form>
                <p className="text-center text-sm text-slate-600 mt-6">
                    Don't have an account? <Link to="/signup" className="font-medium text-emerald-600 hover:text-emerald-500">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;