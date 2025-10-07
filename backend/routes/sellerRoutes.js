import express from 'express';
import { addSeller, getSellersByManufacturer } from '../controllers/sellerController.js';

const router = express.Router();

router.post('/', addSeller); // POST /api/sellers
router.get('/manufacturer/:manufacturerId', getSellersByManufacturer); // GET /api/sellers/manufacturer/MANU-A

export default router;