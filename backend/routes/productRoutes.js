// backend/routes/productRoutes.js

import express from 'express';
import { createProduct, verifyProduct, getProductsBySeller, getProductsByConsumer, transferProduct } from '../controllers/productController.js';


const router = express.Router();

router.route('/').post(createProduct);
router.route('/verify/:productId').get(verifyProduct);
router.route('/seller/:sellerCode').get(getProductsBySeller);
router.route('/consumer/:consumerCode').get(getProductsByConsumer);
router.route('/transfer/:productId').put(transferProduct);

export default router;