import Seller from '../models/sellerModel.js';

// @desc    Add a new seller
// @route   POST /api/sellers
export const addSeller = async (req, res) => {
  try {
    const { sellerCode, sellerName, sellerBrand, sellerPhoneNumber, sellerManager, sellerAddress, manufacturerId } = req.body;

    const sellerExists = await Seller.findOne({ sellerCode });
    if (sellerExists) {
      return res.status(400).json({ message: 'Seller with this code already exists.' });
    }

    const seller = await Seller.create({
      sellerCode, sellerName, sellerBrand, sellerPhoneNumber, sellerManager, sellerAddress, manufacturerId
    });
    res.status(201).json(seller);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get all sellers registered by a manufacturer
// @route   GET /api/sellers/manufacturer/:manufacturerId
export const getSellersByManufacturer = async (req, res) => {
  try {
    const sellers = await Seller.find({ manufacturerId: req.params.manufacturerId });
    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};