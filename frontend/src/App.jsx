// frontend/src/App.jsx (Updated)

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

// General Pages
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';

// Manufacturer Pages
import ManufacturerPage from './pages/Manufacturer/ManufacturerPage';
import AddProductPage from './pages/Manufacturer/AddProductPage';
import AddSellerPage from './pages/Manufacturer/AddSellerPage';
import QuerySellerPage from './pages/Manufacturer/QuerySellerPage';
import SellToSellerPage from './pages/Manufacturer/SellToSellerPage';


// Seller Pages
import SellerPage from './pages/SellerPage';
import QueryProductsPage from './pages/Manufacturer/QueryProductsPage';
import SellToConsumerPage from './pages/Seller/SellToConsumerPage';


// Consumer Pages
// import ConsumerPage from './pages/Consumer/ConsumerPage';
import ScanPage from './pages/Consumer/ScanPage'; // The actual scanner
import PurchaseHistoryPage from './pages/Consumer/PurchaseHistoryPage';
import ConsumerPage from "./pages/Consumer/ConsumerPage";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white font-sans">
        <Header />
        <main className="container mx-auto p-4 mt-6">
          <Routes>
            {/* General */}
            <Route path="/" element={<HomePage />} />
            <Route path="/verify/:productId" element={<ResultPage />} />

            {/* Manufacturer */}
            <Route path="/manufacturer" element={<ManufacturerPage />} />
            <Route path="/manufacturer/add-product" element={<AddProductPage />} />
            <Route path="/manufacturer/add-seller" element={<AddSellerPage />} />
            <Route path="/manufacturer/query-seller" element={<QuerySellerPage />} />
            <Route path="/manufacturer/sell" element={<SellToSellerPage />} />


            {/* Seller */}
            <Route path="/seller" element={<SellerPage />} />
            <Route path="/seller/query-products" element={<QueryProductsPage />} />
            <Route path="/seller/sell" element={<SellToConsumerPage />} />


            {/* Consumer */}
            <Route path="/consumer" element={<ConsumerPage />} />
            <Route path="/consumer/scan" element={<ScanPage />} />
            <Route path="/consumer/history" element={<PurchaseHistoryPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;