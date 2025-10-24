import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts & Main Pages
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import ManufacturerLayout from './layouts/ManufacturerLayout';
import SellerLayout from './layouts/SellerLayout';
import ConsumerLayout from './layouts/ConsumerLayout';

// Manufacturer Pages
import AddProductPage from './pages/Manufacturer/AddProductPage';
import AddSellerPage from './pages/Manufacturer/AddSellerPage';
import SellToSellerPage from './pages/Manufacturer/SellToSellerPage';
// import QuerySellerPage from './pages/Manufacturer/QuerySellerPage';
// import QueryProductsPage from './pages/Manufacturer/QueryProductsPage';

// Seller Pages
import SellToConsumerPage from './pages/Seller/SellToConsumerPage';

// Consumer Pages
import VerifyProductPage from './pages/Consumer/VerifyProductPage';
import VerificationResultPage from './pages/Consumer/VerificationResultPage';
import PurchaseHistoryPage from './pages/Consumer/PurchaseHistoryPage';

import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'manufacturer',
        element: <ManufacturerLayout />,
        children: [
          { index: true, element: <AddProductPage /> },
          { path: 'add-product', element: <AddProductPage /> },
          { path: 'add-seller', element: <AddSellerPage /> },
          { path: 'sell-to-seller', element: <SellToSellerPage /> },
          // { path: 'query-sellers', element: <QuerySellerPage /> },
          // { path: 'query-products', element: <QueryProductsPage /> }
        ]
      },
      {
        path: 'seller',
        element: <SellerLayout />,
        children: [
          { index: true, element: <SellToConsumerPage /> },
          { path: 'sell-to-consumer', element: <SellToConsumerPage /> },
          // { path: 'query-products', element: <QueryProductsPage /> }
        ]
      },
      {
        path: 'consumer',
        element: <ConsumerLayout />,
        errorElement: <ErrorBoundary />,
        children: [
          { 
            index: true, 
            element: <VerifyProductPage />,
            errorElement: <ErrorBoundary />
          },
          { 
            path: 'verify', 
            element: <VerifyProductPage />,
            errorElement: <ErrorBoundary />
          },
          { 
            path: 'verify/:productSN', 
            element: <VerificationResultPage />,
            errorElement: <ErrorBoundary />
          },
          { 
            path: 'purchase-history', 
            element: <PurchaseHistoryPage />,
            errorElement: <ErrorBoundary />
          }
        ]
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// ... (rest of the file remains the same)