// ... (all your existing imports)
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      
      // ADD THESE NEW ROUTES
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },

      {
        path: 'manufacturer',
        element: <ManufacturerLayout />,
        children: [
          // ... (manufacturer routes remain the same)
        ]
      },
      {
        path: 'seller',
        element: <SellerLayout />,
        children: [
          // ... (seller routes remain the same)
        ]
      },
      {
        path: 'consumer',
        element: <ConsumerLayout />,
        children: [
          // ... (consumer routes remain the same)
        ]
      }
    ],
  },
]);

// ... (rest of the file remains the same)