// backend/routes/productRoutes.js

import express from 'express';
import { createProduct, verifyProduct } from '../controllers/productController.js';


const router = express.Router();

router.post('/', createProduct);
router.get('/:productId', verifyProduct);


export default router;