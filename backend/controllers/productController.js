import Product from '../models/productModel.js';
import Seller from '../models/sellerModel.js';

// @desc    Create a new product
// @route   POST /api/products
export const addProduct = async (req, res) => {
    try {
        const { productId, name, brand, price, manufacturerId } = req.body;

        const productExists = await Product.findOne({ productId });
        if (productExists) {
            return res.status(400).json({ message: 'Product with this ID already exists.' });
        }

        const product = await Product.create({
            productId,
            name,
            brand,
            price,
            manufacturerId,
            currentOwner: manufacturerId, // The manufacturer is the first owner
            status: 'With Manufacturer',
        });

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get a single product's details
// @route   GET /api/products/verify/:productId
export const verifyProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ productId: req.params.productId });
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Transfer product ownership
// @route   PUT /api/products/transfer/:productId
export const transferProduct = async (req, res) => {
    try {
        const { newOwnerCode, newStatus } = req.body;
        const product = await Product.findOne({ productId: req.params.productId });

        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        // --- Business Logic ---
        if (product.status === 'With Manufacturer' && newStatus === 'With Seller') {
            const sellerExists = await Seller.findOne({ sellerCode: newOwnerCode });
            if (!sellerExists) {
                return res.status(400).json({ message: 'Seller not registered.' });
            }
        } else if (product.status === 'With Seller' && newStatus === 'Sold') {
            // No consumer validation for now, but you could add it here
        } else {
            return res.status(400).json({ message: `Invalid transfer from ${product.status} to ${newStatus}.` });
        }

        product.currentOwner = newOwnerCode;
        product.status = newStatus;
        const updatedProduct = await product.save();

        res.status(200).json({ message: 'Product transferred successfully!', product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get all products for sale by a seller
// @route   GET /api/products/seller/:sellerCode
export const getProductsBySeller = async (req, res) => {
  try {
    const products = await Product.find({ 
      currentOwner: req.params.sellerCode, 
      status: 'With Seller' 
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get purchase history for a consumer
// @route   GET /api/products/consumer/:consumerCode
export const getProductsByConsumer = async (req, res) => {
  try {
    const products = await Product.find({ 
      currentOwner: req.params.consumerCode, 
      status: 'Sold' 
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};