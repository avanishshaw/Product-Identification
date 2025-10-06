import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
    sellerCode: { type: String, required: true, unique: true },
    sellerName: { type: String, required: true },
    sellerBrand: { type: String },
    sellerPhoneNumber: { type: String },
    sellerManager: { type: String },
    sellerAddress: { type: String, required: true },
    manufacturerId: { type: String, required: true }, // The Manufacturer who registered this seller
}, { timestamps: true });

const Seller = mongoose.model('Seller', sellerSchema);
export default Seller;