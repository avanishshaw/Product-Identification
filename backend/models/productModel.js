// backend/models/productModel.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    productId: { type: String, required: true, unique: true, trim: true },
    description: { type: String },
    manufacturingDate: { type: Date, default: Date.now },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;