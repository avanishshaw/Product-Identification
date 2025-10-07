import express from 'express';
import {
  addProduct,
  verifyProduct,
  transferProduct,
  getProductsBySeller,
  getProductsByConsumer,
} from '../controllers/productController.js';

const router = express.Router();

router.post('/', addProduct); // POST to /api/products
router.get('/verify/:productId', verifyProduct); // GET /api/products/verify/PROD123
router.put('/transfer/:productId', transferProduct); // PUT /api/products/transfer/PROD123
router.get('/seller/:sellerCode', getProductsBySeller); // GET /api/products/seller/SELLER01
router.get('/consumer/:consumerCode', getProductsByConsumer); // GET /api/products/consumer/CONSUMER01

export default router;