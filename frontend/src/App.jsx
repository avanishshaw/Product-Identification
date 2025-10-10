import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts & Main Pages
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import ManufacturerLayout from './layouts/ManufacturerLayout';
import SellerLayout from './layouts/SellerLayout';
import ConsumerLayout from './layouts/ConsumerLayout';

// All your page imports...
import AddProductPage from './pages/Manufacturer/AddProductPage';
import AddSellerPage from './pages/Manufacturer/AddSellerPage';
import SellToSellerPage from './pages/Manufacturer/SellToSellerPage';
import QuerySellerPage from './pages/Manufacturer/QuerySellerPage';
import SellToConsumerPage from './pages/Seller/SellToConsumerPage';
import QueryProductsPage from './pages/Seller/QueryProductsPage';
import VerifyProductPage from './pages/Consumer/VerifyProductPage';
import VerificationResultPage from './pages/Consumer/VerificationResultPage';
import PurchaseHistoryPage from './pages/Consumer/PurchaseHistoryPage';

// Placeholder for index routes within roles
const Placeholder = () => <p className="text-center text-slate-500 pt-8">Select an action from the menu above to get started.</p>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'manufacturer',
        element: <ManufacturerLayout />,
        children: [
          { index: true, element: <Placeholder /> },
          { path: 'add-product', element: <AddProductPage /> },
          { path: 'add-seller', element: <AddSellerPage /> },
          { path: 'sell-product', element: <SellToSellerPage /> },
          { path: 'query-seller', element: <QuerySellerPage /> },
        ]
      },
      {
        path: 'seller',
        element: <SellerLayout />,
        children: [
            { index: true, element: <Placeholder /> },
            { path: 'sell-product', element: <SellToConsumerPage /> },
            { path: 'query-products', element: <QueryProductsPage /> },
        ]
      },
      {
        path: 'consumer',
        element: <ConsumerLayout />,
        children: [
            { index: true, element: <Placeholder /> },
            { path: 'verify', element: <VerifyProductPage /> },
            // THE FIX: The result page is now a child of the ConsumerLayout,
            // so it can correctly read the :productSN parameter.
            { path: 'verify/:productSN', element: <VerificationResultPage /> },
            { path: 'history', element: <PurchaseHistoryPage /> },
        ]
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;