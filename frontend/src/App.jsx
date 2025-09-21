// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScanPage from './pages/ScanPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white font-sans">
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ScanPage />} />
            <Route path="/verify/:productId" element={<ResultPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;