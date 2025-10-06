import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true }, // From ProductSN
    name: { type: String, required: true },
    brand: { type: String },
    price: { type: Number, required: true },
    manufacturerId: { type: String, required: true },
    currentOwner: { type: String, default: 'Manufacturer' }, // Can be Manufacturer ID, Seller Code, or Consumer Code
    status: {
        type: String,
        enum: ['With Manufacturer', 'With Seller', 'Sold'],
        default: 'With Manufacturer',
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

const Product = mongoose.model('Product', productSchema);
export default Product;