import express from 'express';
import {
	getReservations,
	getReservation,
	createReservation,
	updateReservation,
	deleteReservation,
} from '../controllers/reservationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
	.route('/')
	.get(protect, getReservations)
	.post(protect, createReservation);
router
	.route('/:id')
	.get(protect, getReservation)
	.put(protect, updateReservation)
	.delete(protect, deleteReservation);

export default router;
