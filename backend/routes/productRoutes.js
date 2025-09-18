// backend/routes/productRoutes.js

import express from 'express';
import { createProduct, verifyProduct } from '..controllers/productController.js';

const router = express.Router();

router.route('/', post(createProduct));
router.route('/:productId').get(verifyProduct);

export default router;