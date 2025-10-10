import express from 'express';
import {
  addProduct,
  verifyProduct,
  transferProduct,
  getProductsBySeller,
  getProductsByConsumer,
} from '../controllers/productController.js';

const router = express.Router();

// All routes now use :productSN as the parameter
router.post('/', addProduct);
router.get('/verify/:productSN', verifyProduct);
router.put('/transfer/:productSN', transferProduct);
router.get('/seller/:sellerCode', getProductsBySeller);
router.get('/consumer/:consumerCode', getProductsByConsumer);

export default router;