import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    // Renamed 'productId' to 'productSN' to match the frontend form field.
    // This will be our unique identifier.
    productSN: { type: String, required: true, unique: true }, 
    name: { type: String, required: true },
    brand: { type: String },
    price: { type: Number, required: true },
    manufacturerId: { type: String, required: true },
    currentOwner: { type: String, default: 'Manufacturer' },
    status: {
        type: String,
        enum: ['With Manufacturer', 'With Seller', 'Sold'],
        default: 'With Manufacturer',
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;