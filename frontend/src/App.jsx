import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import ManufacturerLayout from './layouts/ManufacturerLayout';
import SellerLayout from './layouts/SellerLayout';
import ConsumerLayout from './layouts/ConsumerLayout';

// Pages
import HomePage from './pages/HomePage';

// Manufacturer Pages
import AddProductPage from './pages/Manufacturer/AddProductPage';
import AddSellerPage from './pages/Manufacturer/AddSellerPage';
import SellToSellerPage from './pages/Manufacturer/SellToSellerPage';
import QuerySellerPage from './pages/Manufacturer/QuerySellerPage';

// Seller Pages
import SellToConsumerPage from './pages/Seller/SellToConsumerPage';
import QueryProductsPage from './pages/Seller/QueryProductsPage';

// Consumer Pages
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
            { path: 'verify/:productId', element: <VerificationResultPage /> },
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