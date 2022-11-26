import asyncHandler from 'express-async-handler';
import connection from '../config/db.js';

// @desc   Get all reservations for a user
// @route  GET /reservation
// @access Private
const getReservations = asyncHandler(async (req, res) => {
	const userId = req.session.userId;
	const appType = 'test drive';

	connection.query(
		`SELECT * FROM appointment WHERE customer_id = '${userId}' AND app_type = '${appType}'`,
		(err, result) => {
			if (err) throw err;
			res.send(result);
		}
	);
});

// @desc   Get a single reservation for a user
// @route  GET /reservation/:id
// @access Private
const getReservation = asyncHandler(async (req, res) => {
	const userId = req.session.userId;
	const reservationId = req.params.id;

	connection.query(
		`SELECT * FROM appointment WHERE customer_id = '${userId}' AND app_id = '${reservationId}'`,
		(err, result) => {
			if (err) throw err;
			res.send(result);
		}
	);
});

// @desc   Create a new reservation
// @route  POST /reservation
// @access Private
const createReservation = asyncHandler(async (req, res) => {
	const userId = req.session.userId;
	const { vin, appDate, notes } = req.body;
	const appType = 'test drive';

	connection.query(
		`INSERT INTO appointment (customer_id, vin, app_date, app_type, other_info) VALUES ('${userId}', '${vin}', '${appDate}', '${appType}', '${notes}')`,
		(err, result) => {
			if (err) throw err;
			res.send(result);
		}
	);
});

// @desc   Update a reservation
// @route  PUT /reservation/:id
// @access Private
const updateReservation = asyncHandler(async (req, res) => {
	const userId = req.session.userId;
	const reservationId = req.params.id;
	const { appDate, notes } = req.body;

	connection.query(
		`UPDATE appointment SET app_date = '${appDate}', other_info = '${notes}' WHERE customer_id = '${userId}' AND app_id = '${reservationId}'`,
		(err, result) => {
			if (err) throw err;
			res.send(result);
		}
	);
});

// @desc   Delete a reservation
// @route  DELETE /reservation/:id
// @access Private
const deleteReservation = asyncHandler(async (req, res) => {
	const userId = req.session.userId;
	const reservationId = req.params.id;

	connection.query(
		`DELETE FROM appointment WHERE customer_id = '${userId}' AND app_id = '${reservationId}'`,
		(err, result) => {
			if (err) throw err;
			res.send(result);
		}
	);
});

export {
	getReservations,
	getReservation,
	createReservation,
	updateReservation,
	deleteReservation,
};
