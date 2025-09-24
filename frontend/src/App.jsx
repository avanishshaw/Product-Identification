// frontend/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Components
import Header from './components/Header';

// Import Pages
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import SellerPage from './pages/SellerPage';
import ScanPage from './pages/ScanPage'; // This is our Consumer page
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white font-sans">
        <Header />
        <main className="container mx-auto p-4 mt-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/manufacturer" element={<AddProductPage />} />
            <Route path="/seller" element={<SellerPage />} />
            <Route path="/consumer" element={<ScanPage />} />
            <Route path="/verify/:productId" element={<ResultPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;