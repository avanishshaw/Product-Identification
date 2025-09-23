// backend/models/productModel.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    productId: { type: String, required: true, unique: true, trim: true }, // This is the Product SN
    description: { type: String },
    brand: { type: String },
    price: { type: Number },
    manufacturerId: { type: String, required: true },
    status: {
        type: String,
        enum: ['Created', 'With Manufacturer', 'In Transit', 'With Seller', 'Sold'],
        default: 'With Manufacturer',
    },
    currentOwner: { type: String, default: 'Manufacturer' }, 
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;