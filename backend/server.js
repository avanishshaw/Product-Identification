import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// --- CONFIGURATION ---
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Successfully connected to MongoDB Atlas!');
    } catch (error) {
        console.error('❌ Error connecting to MongoDB Atlas:', error.message);
        process.exit(1); // Exit process with failure
    }
};

connectDB();

// --- API ROUTES (We will add these in the next step) ---
app.get('/', (req, res) => {
    res.send('AuthentiQR API is running...');
});

// --- START SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});