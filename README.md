# 🎯 AuthentiQR - Product Identification System

A modern, full-stack application for product authentication and tracking using QR codes. Features a beautiful, state-of-the-art UI with glassmorphism effects, animated backgrounds, and seamless user experience.

![AuthentiQR](https://img.shields.io/badge/AuthentiQR-Product%20Verification-emerald?style=for-the-badge)

## ✨ Features

### 🏭 Manufacturer Portal
- **Product Management**: Add new products with unique identifiers
- **QR Code Generation**: Automatically generate QR codes for product identification
- **Seller Management**: Register and manage authorized sellers
- **Product Tracking**: Monitor product chain of custody

### 🏪 Seller Portal
- **Inventory Management**: Query assigned products
- **Sales Processing**: Transfer products to consumers with a simple scan
- **Ownership Transfer**: Update product ownership status seamlessly

### 🛒 Consumer Portal
- **Instant Verification**: Scan QR codes to verify product authenticity
- **Product Details**: View complete product information and history
- **Purchase History**: Track owned products with full transparency

## 🎨 Modern UI Features

- **Glassmorphism Design**: Beautiful frosted glass effects throughout
- **Animated Backgrounds**: Dynamic gradient animations and floating orbs
- **Smooth Animations**: Micro-interactions and transitions
- **Gradient Buttons**: Eye-catching gradient buttons with hover effects
- **Responsive Design**: Fully responsive across all devices
- **Modern Typography**: Clean, readable Inter font

## 🛠️ Technical Stack

### Frontend
- **React 19** with Vite
- **TailwindCSS 4** for styling
- **React Router** for navigation
- **QR Code Scanning** capabilities
- **Glassmorphism** UI components

### Backend
- **Express.js** REST API
- **MongoDB** with Mongoose
- **CORS** enabled
- **Environment-based** configuration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account or local MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Product-Identification
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env  # Create .env file and add your MongoDB URI
npm run dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install
cp .env.example .env  # Create .env file with API URL
npm run dev
```

4. **Access the application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5001

## 📝 Environment Variables

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5001/api
```

### Backend (.env)
```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## 🐳 Docker Deployment

For production deployment using Docker:

```bash
docker-compose up -d --build
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📁 Project Structure

```
Product-Identification/
├── backend/
│   ├── controllers/     # Request handlers
│   ├── models/          # Database schemas
│   ├── routes/          # API endpoints
│   ├── middleware/     # Custom middleware
│   └── server.js       # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── layouts/    # Page layouts per role
│   │   ├── pages/      # Route components
│   │   └── api.js      # API client
│   └── dist/           # Build output
└── DEPLOYMENT.md       # Deployment guide
```

## 🎯 Usage

1. **Manufacturer**: Add products and generate QR codes
2. **Seller**: Receive products from manufacturers and transfer to consumers
3. **Consumer**: Scan QR codes to verify product authenticity

## 🔒 Security Features

- Environment-based configuration
- CORS protection
- Secure API endpoints
- Input validation

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile devices

## 🚢 Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

Supported platforms:
- Vercel (Frontend)
- Railway / Render (Backend)
- Docker / Docker Compose
- Traditional VPS deployment

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for scalability and maintainability
- User-focused interface design

---

**Made with ❤️ for product authentication**
