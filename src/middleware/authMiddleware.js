import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
	if (req.session.loggedin) {
		next();
	} else {
		res.status(401);
		res.send('Please login to view this page');
	}
});

export { protect };
