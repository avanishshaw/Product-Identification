# Product Identification (QR Code)

Simple full-stack app to register products, assign to sellers/consumers and verify via QR codes.

## Repo layout
- backend/ — Express + Mongoose API  
  - Entry: [backend/server.js](backend/server.js)  
  - Env: [backend/.env](backend/.env)  
  - Routes: [backend/routes/productRoutes.js](backend/routes/productRoutes.js), [backend/routes/sellerRoutes.js](backend/routes/sellerRoutes.js)  
  - Controllers: [backend/controllers/productController.js](backend/controllers/productController.js), [backend/controllers/sellerController.js](backend/controllers/sellerController.js)

- frontend/ — Vite + React UI  
  - Entry: [frontend/src/App.jsx](frontend/src/App.jsx)  
  - Vite config: [frontend/vite.config.js](frontend/vite.config.js)  
  - Scanner: [frontend/src/pages/Consumer/ScanPage.jsx](frontend/src/pages/Consumer/ScanPage.jsx)  
  - Result UI: [frontend/src/pages/ResultPage.jsx](frontend/src/pages/ResultPage.jsx) and [frontend/src/components/ProductCard.jsx](frontend/src/components/ProductCard.jsx)

## Quick start

Prerequisites: Node.js >= 18, npm/yarn.

1. Backend
   - cd backend
   - npm install
   - create/update [backend/.env](backend/.env) with your MongoDB URI (MONGO_URI) and optional PORT
   - Run dev server:
     - npm run dev
   - API root: http://localhost:5001 (default from backend/.env). See [backend/server.js](backend/server.js)

2. Frontend
   - cd frontend
   - npm install
   - npm run dev
   - Open the URL printed by Vite (usually http://localhost:5173)

## Important API endpoints

- Create product
  - POST /api/products
  - Handler: [`createProduct`](backend/controllers/productController.js) — [backend/routes/productRoutes.js](backend/routes/productRoutes.js)

- Verify product
  - GET /api/products/verify/:productId
  - Handler: [`verifyProduct`](backend/controllers/productController.js) — used by frontend route `/verify/:productId` in [frontend/src/App.jsx](frontend/src/App.jsx)

- Transfer product
  - PUT /api/products/transfer/:productId
  - Handler: [`transferProduct`](backend/controllers/productController.js)

- Add seller
  - POST /api/sellers/add
  - Handler: [`addSeller`](backend/controllers/sellerController.js)

- Query sellers by manufacturer
  - GET /api/sellers/manufacturer/:manufacturerId
  - Handler: [`getSellersByManufacturer`](backend/controllers/sellerController.js)

## Notes
- Backend reads MONGO_URI and PORT from [backend/.env](backend/.env). Ensure values are secure and not committed.
- Frontend scanner navigates to `/verify/:productId` on successful scan — see [frontend/src/pages/Consumer/ScanPage.jsx](frontend/src/pages/Consumer/ScanPage.jsx).
- CORS is enabled in backend for local dev (see [backend/server.js](backend/server.js)).
- UI uses Tailwind classes; Tailwind is configured in [frontend/vite.config.js](frontend/vite.config.js).

If you want, I can commit this README to the repo file system next.<!-- filepath: c:\Projects\Product Identification\README.md -->

# Product Identification (QR Code)

Simple full-stack app to register products, assign to sellers/consumers and verify via QR codes.

## Repo layout
- backend/ — Express + Mongoose API  
  - Entry: [backend/server.js](backend/server.js)  
  - Env: [backend/.env](backend/.env)  
  - Routes: [backend/routes/productRoutes.js](backend/routes/productRoutes.js), [backend/routes/sellerRoutes.js](backend/routes/sellerRoutes.js)  
  - Controllers: [backend/controllers/productController.js](backend/controllers/productController.js), [backend/controllers/sellerController.js](backend/controllers/sellerController.js)

- frontend/ — Vite + React UI  
  - Entry: [frontend/src/App.jsx](frontend/src/App.jsx)  
  - Vite config: [frontend/vite.config.js](frontend/vite.config.js)  
  - Scanner: [frontend/src/pages/Consumer/ScanPage.jsx](frontend/src/pages/Consumer/ScanPage.jsx)  
  - Result UI: [frontend/src/pages/ResultPage.jsx](frontend/src/pages/ResultPage.jsx) and [frontend/src/components/ProductCard.jsx](frontend/src/components/ProductCard.jsx)

## Quick start

Prerequisites: Node.js >= 18, npm/yarn.

1. Backend
   - cd backend
   - npm install
   - create/update [backend/.env](backend/.env) with your MongoDB URI (MONGO_URI) and optional PORT
   - Run dev server:
     - npm run dev
   - API root: http://localhost:5001 (default from backend/.env). See [backend/server.js](backend/server.js)

2. Frontend
   - cd frontend
   - npm install
   - npm run dev
   - Open the URL printed by Vite (usually http://localhost:5173)

## Important API endpoints

- Create product
  - POST /api/products
  - Handler: [`createProduct`](backend/controllers/productController.js) — [backend/routes/productRoutes.js](backend/routes/productRoutes.js)

- Verify product
  - GET /api/products/verify/:productId
  - Handler: [`verifyProduct`](backend/controllers/productController.js) — used by frontend route `/verify/:productId` in [frontend/src/App.jsx](frontend/src/App.jsx)

- Transfer product
  - PUT /api/products/transfer/:productId
  - Handler: [`transferProduct`](backend/controllers/productController.js)

- Add seller
  - POST /api/sellers/add
  - Handler: [`addSeller`](backend/controllers/sellerController.js)

- Query sellers by manufacturer
  - GET /api/sellers/manufacturer/:manufacturerId
  - Handler: [`getSellersByManufacturer`](backend/controllers/sellerController.js)

## Notes
- Backend reads MONGO_URI and PORT from [backend/.env](backend/.env). Ensure values are secure and not committed.
- Frontend scanner navigates to `/verify/:productId` on successful scan — see [frontend/src/pages/Consumer/ScanPage.jsx](frontend/src/pages/Consumer/ScanPage.jsx).
- CORS is enabled in backend for local dev (see [backend/server.js](backend/server.js)).
- UI uses Tailwind classes; Tailwind is configured in [frontend/vite.config.js](frontend/vite.config.js).

If you want, I can commit this README to the repo file system next.