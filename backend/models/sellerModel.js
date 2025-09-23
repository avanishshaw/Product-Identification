// backend/models/sellerModel.js

import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
  sellerName: { type: String, required: true },
  sellerBrand: { type: String },
  sellerCode: { type: String, required: true, unique: true },
  sellerPhoneNumber: { type: String },
  sellerManager: { type: String },
  sellerAddress: { type: String, required: true },
  manufacturerId: { type: String, required: true },
}, { timestamps: true });

const Seller = mongoose.model('Seller', sellerSchema);

export default Seller;