import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Import routes
import productRoutes from './routes/productRoutes.js';
import sellerRoutes from './routes/sellerRoutes.js';

// --- CONFIGURATION ---
dotenv.config();
const app = express();

// CORS Configuration - Allow specific origins in production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? (process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000', 'http://localhost:5173'])
    : true, // Allow all origins in development
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

// --- DATABASE CONNECTION ---
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Avanish:Avanish123@cluster0.bodkcyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        
        // Drop existing indexes to avoid conflicts
        await conn.connection.collection('products').dropIndexes();
        
        console.log('✅ Successfully connected to MongoDB Atlas!');
    } catch (error) {
        console.error('❌ Error connecting to MongoDB Atlas:', error.message);
        process.exit(1);
    }
};
connectDB();


// --- API ROUTES ---
app.use('/api/products', productRoutes);
app.use('/api/sellers', sellerRoutes);

app.get('/', (req, res) => {
    res.send('AuthentiQR API is running...');
});

// --- ERROR HANDLING MIDDLEWARE ---
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// --- 404 HANDLER ---
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// --- START SERVER ---
const PORT = process.env.PORT || 5001;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
});