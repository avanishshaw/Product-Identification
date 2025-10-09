# Product Identification System

A full-stack application for product authentication and tracking using QR codes.

## Features

### Manufacturer Portal
- Product Management
  - Add new products with unique identifiers
  - Generate QR codes for product identification
  - Track product status and ownership
- Seller Management
  - Register new authorized sellers
  - Query registered sellers
  - Transfer products to sellers
- Product Tracking
  - Monitor product chain of custody
  - View product transfer history

### Seller Portal
- Inventory Management
  - Query assigned products
  - Transfer products to consumers
- Sales Processing
  - Record consumer sales
  - Update product ownership status

### Consumer Portal
- Product Verification
  - Scan product QR codes
  - Verify product authenticity
  - View product details and history
- Purchase History
  - Track owned products
  - View purchase records

## Technical Stack

### Frontend
- React with Vite
- TailwindCSS for styling
- QR code scanning capabilities
- Responsive layouts for all user types
- Role-based routing and access control

### Backend
- Express.js REST API
- MongoDB with Mongoose
- Environmental configuration
- CORS enabled for development
- Structured MVC architecture

## Project Structure

### Backend (`/backend`)
```
├── controllers/            # Request handlers
├── models/                # Database schemas
├── routes/                # API endpoints
├── .env                   # Configuration
└── server.js             # Entry point
```

### Frontend (`/frontend/src`)
```
├── components/            # Reusable UI components
├── layouts/              # Page layouts per role
├── pages/                # Route components
│   ├── Consumer/         # Consumer features
│   ├── Manufacturer/     # Manufacturer features
│   └── Seller/          # Seller features
└── assets/              # Static resources
```

## Setup and Installation
[Previous setup instructions remain the same...]

## API Documentation
[Previous API documentation remains the same...]

## Notes
- Built with security and scalability in mind
- Features role-based access control
- Supports real-time product verification
- Includes audit trail for product transfers