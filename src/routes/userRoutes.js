import express from 'express';

const router = express.Router();

router.route('/').get((req, res) => {
	res.send('Hello World!');
});
router.route('/register').post();
router.route('/login').post();

export default router;
