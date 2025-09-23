// backend/routes/sellerRoutes.js

import express from 'express';
import { addSeller, getSellersByManufacturer } from '../controllers/sellerController.js';

const router = express.Router();

router.route('/add').post(addSeller);
router.route('/manufacturer/:manufacturerId').get(getSellersByManufacturer);

export default router;