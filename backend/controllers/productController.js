// backend/controllers/productController.js

import Product from '../models/productModel.js';

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