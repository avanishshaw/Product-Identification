import Product from '../models/productModel.js';
import Seller from '../models/sellerModel.js';

// @desc    Create a new product
// @route   POST /api/products
export const addProduct = async (req, res) => {
    try {
        const { productSN, name, brand, price, manufacturerId } = req.body;

        // Add a check to ensure all required fields are present
        if (!productSN || !name || !price || !manufacturerId) {
            return res.status(400).json({ message: 'Please provide all required fields: productSN, name, price, manufacturerId' });
        }

        const productExists = await Product.findOne({ productSN });
        if (productExists) {
            return res.status(400).json({ message: 'Product with this SN already exists.' });
        }

        const product = await Product.create({
            productSN, name, brand, price, manufacturerId,
            currentOwner: manufacturerId,
            status: 'With Manufacturer',
        });

        res.status(201).json(product);
    } catch (error) {
        // Log the full error to the backend console for better debugging
        console.error('ADD PRODUCT ERROR:', error); 
        res.status(500).json({ message: 'Server Error while adding product.', error: error.message });
    }
};

// All other functions remain the same...

// @desc    Get a single product's details
// @route   GET /api/products/verify/:productSN
export const verifyProduct = async (req, res) => {
    try {
        let { productSN } = req.params;
        
        // URL decode the productSN in case it was encoded
        productSN = decodeURIComponent(productSN);
        
        if (!productSN) {
            return res.status(400).json({ message: 'Product SN is required.' });
        }

        console.log('\n--- Product Verification Debug ---');
        console.log('Raw productSN from params:', req.params.productSN);
        console.log('Decoded productSN:', productSN);
        
        // Try to find the product (case-insensitive search might help)
        let product = await Product.findOne({ productSN: productSN.trim() });
        
        // If not found, try case-insensitive search
        if (!product) {
            product = await Product.findOne({ 
                productSN: { $regex: new RegExp(`^${productSN.trim()}$`, 'i') } 
            });
        }
        
        console.log('Found product:', product ? JSON.stringify({
            productSN: product.productSN,
            name: product.name,
            status: product.status
        }, null, 2) : 'null');
        
        // Log all products for debugging
        const allProducts = await Product.find({}).limit(10);
        console.log('Sample products in DB:', allProducts.map(p => ({
            productSN: p.productSN,
            name: p.name
        })));
        console.log('--- End Debug ---\n');
        
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ 
                message: `Product with SN ${productSN} not found in the database.`,
                productSN,
                searchedValue: productSN.trim()
            });
        }
    } catch (error) {
        console.error('VERIFY PRODUCT ERROR:', error);
        console.error('Error stack:', error.stack);
        res.status(500).json({ 
            message: 'Failed to verify product.',
            error: error.message,
            productSN: req.params.productSN 
        });
    }
};

// @desc    Transfer product ownership
// @route   PUT /api/products/transfer/:productSN
export const transferProduct = async (req, res) => {
    try {
        const { newOwnerCode, newStatus } = req.body;
        const product = await Product.findOne({ productSN: req.params.productSN });

        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        
        if (product.status === 'With Manufacturer' && newStatus === 'With Seller') {
            const sellerExists = await Seller.findOne({ sellerCode: newOwnerCode });
            if (!sellerExists) {
                return res.status(400).json({ message: 'Seller not registered.' });
            }
        } else if (product.status === 'With Seller' && newStatus === 'Sold') {
            // No consumer validation for now
        } else {
             return res.status(400).json({ message: `Invalid transfer from ${product.status} to ${newStatus}.` });
        }

        product.currentOwner = newOwnerCode;
        product.status = newStatus;
        const updatedProduct = await product.save();

        res.status(200).json({ message: 'Product transferred successfully!', product: updatedProduct });
    } catch (error) {
        console.error('TRANSFER PRODUCT ERROR:', error);
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
    console.error('GET SELLER PRODUCTS ERROR:', error);
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
    console.error('GET CONSUMER HISTORY ERROR:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};