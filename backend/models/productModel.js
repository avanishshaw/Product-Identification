import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productSN: { 
        type: String, 
        required: true, 
        unique: true,
        index: true // Ensure this is properly indexed
    },
    name: { 
        type: String, 
        required: true 
    },
    brand: { 
        type: String,
        default: '' // Optional field with default empty string
    },
    price: { 
        type: Number, 
        required: true,
        min: 0 // Ensure price is non-negative
    },
    manufacturerId: { 
        type: String, 
        required: true 
    },
    currentOwner: { 
        type: String, 
        default: 'Manufacturer' 
    },
    status: {
        type: String,
        enum: ['With Manufacturer', 'With Seller', 'Sold'],
        default: 'With Manufacturer'
    }
}, { 
    timestamps: true,
    // Add this to ensure Mongoose creates proper indexes
    collation: { locale: 'en', strength: 2 }
});

const Product = mongoose.model('Product', productSchema);
export default Product;