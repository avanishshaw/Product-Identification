// backend/server.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import sellerRoutes from './routes/sellerRoutes.js';

// Load Environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Successfully connected to MongoDB Atlas!'))
    .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/sellers', sellerRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
})

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})