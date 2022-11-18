import express from 'express';
import {
	registerUser,
	loginUser,
	logoutUser,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get((req, res) => {
	res.send('Hello World!');
});
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(protect, logoutUser);

export default router;
