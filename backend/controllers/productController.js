// backend/controllers/productController.js

import Product from '../models/productModel.js';
import Seller from '../models/sellerModel.js';

// Create a new Product
export const createProduct = async (req, res) => {
    try {
        const {name, productId, description } = req.body;
        const productExist = await Product.findOne({ productId });

        if(productExist) {
            return res.status(400).json({ message : 'Product with this ID already exist'});
        }

        const product = await Product.create({name, productId, description });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Verify/get a new product by it's id
export const verifyProduct = async (req, res) => {
    try {
        const product = await Product.findOne({productId: req.param.productId });

        if(product) {
            res.status(200).json({ product });
        }else{
            res.status(400).json({message: 'Product not found'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message })
    }
};

// @desc    Get all products for sale by a specific seller
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

// @desc    Get purchase history for a specific consumer
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

// @desc    Transfer product ownership
// @route   PUT /api/products/transfer/:productId
export const transferProduct = async (req, res) => {
  try {
    const { newOwnerCode, newStatus } = req.body;
    
    const product = await Product.findOne({ productId: req.params.productId });

    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }

    // --- Business Logic Validation ---
    // A manufacturer can only sell to a valid seller
    if (product.status === 'With Manufacturer' && newStatus === 'With Seller') {
      const sellerExists = await Seller.findOne({ sellerCode: newOwnerCode });
      if (!sellerExists) {
        return res.status(400).json({ message: 'Invalid Seller Code. This seller is not registered.' });
      }
    } 
    // A seller can only sell to a consumer
    else if (product.status === 'With Seller' && newStatus === 'Sold') {
      // For simplicity, we are not validating the consumer code, but you could add a Consumer model here.
    } 
    // Prevent invalid state transitions
    else {
      return res.status(400).json({ 
        message: `Cannot transfer product from status "${product.status}" to "${newStatus}".` 
      });
    }

    // --- Update Product ---
    product.currentOwner = newOwnerCode;
    product.status = newStatus;
    
    const updatedProduct = await product.save();
    res.status(200).json({ message: 'Product transferred successfully!', product: updatedProduct });

  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};