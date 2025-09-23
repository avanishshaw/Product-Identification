// backend/controllers/sellerController.js

import Seller from '../models/sellerModel.js';

// @desc    Add a new seller
export const addSeller = async (req, res) => {
  try {
    const { sellerName, sellerBrand, sellerCode, sellerPhoneNumber, sellerManager, sellerAddress, manufacturerId } = req.body;

    const sellerExists = await Seller.findOne({ sellerCode });
    if (sellerExists) {
      return res.status(400).json({ message: 'Seller with this code already exists' });
    }

    const seller = await Seller.create({
      sellerName, sellerBrand, sellerCode, sellerPhoneNumber, sellerManager, sellerAddress, manufacturerId
    });
    res.status(201).json(seller);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get all sellers registered by a specific manufacturer
export const getSellersByManufacturer = async (req, res) => {
  try {
    const sellers = await Seller.find({ manufacturerId: req.params.manufacturerId });
    if (sellers) {
      res.status(200).json(sellers);
    } else {
      res.status(404).json({ message: 'No sellers found for this manufacturer' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};