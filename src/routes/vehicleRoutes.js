import express from 'express';
import {
    getAllVehicles, getVehicleByType, getVehicleByBrand, getVehicleById,
    getElectricVehicle, getNewVehicle, getUsedVehicle, getVehicleAfterYear, 
    getVehicleByColor, getVehicleByPrice,
} from '../controllers/vehicleController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getAllVehicles);
router.route('/:id').get(protect, getVehicleById);
router.route('/type/:type').get(protect, getVehicleByType);
router.route('/brand/:brand').get(protect, getVehicleByBrand);
router.route('/electric').get(protect, getElectricVehicle);
router.route('/newVehicle').get(protect, getNewVehicle);
router.route('/usedVehicle').get(protect, getUsedVehicle);
router.route('/year').get(protect, getVehicleAfterYear);
router.route('/color').get(protect, getVehicleByColor);
router.route('/price').get(protect, getVehicleByPrice);

export default router;