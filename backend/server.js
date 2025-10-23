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
app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Avanish:Avanish123@cluster0.bodkcyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    try {
        console.log('Connecting to MongoDB with URI:', MONGO_URI);
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

// --- START SERVER ---
// ... (keep your existing server start logic)
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});