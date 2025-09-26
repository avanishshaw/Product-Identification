// backend/routes/productRoutes.js

import express from 'express';
import { createProduct, verifyProduct, getProductsBySeller, getProductsByConsumer } from '../controllers/productController.js';


const router = express.Router();

router.route('/').post(createProduct);
router.route('/verify/:productId').get(verifyProduct); // Renamed for clarity
router.route('/seller/:sellerCode').get(getProductsBySeller);
router.route('/consumer/:consumerCode').get(getProductsByConsumer);

export default router;