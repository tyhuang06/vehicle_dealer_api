import asyncHandler from 'express-async-handler';
import connection from '../config/db.js';

// @desc   Get all orders for a user
// @route  GET /order
// @access Private
const getOrders = asyncHandler(async (req, res) => {
	const userId = req.session.userId;

	connection.query(
		`SELECT * FROM vehicle_order WHERE customer_id = '${userId}'`,
		(err, result) => {
			if (err) throw err;
			res.send(result);
		}
	);
});

// @desc   Get a single order for a user
// @route  GET /order/:id
// @access Private
const getOrder = asyncHandler(async (req, res) => {
	const userId = req.session.userId;
	const orderId = req.params.id;

	connection.query(
		`SELECT * FROM vehicle_order WHERE customer_id = '${userId}' AND order_id = '${orderId}'`,
		(err, result) => {
			if (err) throw err;
			res.send(result[0]);
		}
	);
});

// @desc   Create a new order
// @route  POST /order
// @access Private
const createOrder = asyncHandler(async (req, res) => {
	const userId = req.session.userId;
	const { vin, notes } = req.body;
	const orderDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
	const salesPersonId = 1; // for now

	connection.query(
		`INSERT INTO vehicle_order (customer_id, salesperson_id, vin, order_date, notes) VALUES ('${userId}', '${salesPersonId}', '${vin}', '${orderDate}', '${notes}')`,
		(err, result) => {
			if (err) throw err;
			res.send(result);
		}
	);
});

// @desc   Update an order
// @route  PUT /order/:id
// @access Private
const updateOrder = asyncHandler(async (req, res) => {
	const userId = req.session.userId;
	const orderId = req.params.id;
	const { notes } = req.body;

	connection.query(
		`UPDATE vehicle_order SET notes = '${notes}' WHERE customer_id = '${userId}' AND order_id = '${orderId}'`,
		(err, result) => {
			if (err) throw err;
			res.send(result);
		}
	);
});

// @desc   Delete an order
// @route  DELETE /order/:id
// @access Private
const deleteOrder = asyncHandler(async (req, res) => {
	const userId = req.session.userId;
	const orderId = req.params.id;

	connection.query(
		`DELETE FROM vehicle_order WHERE customer_id = '${userId}' AND order_id = '${orderId}'`,
		(err, result) => {
			if (err) throw err;
			res.send(result);
		}
	);
});

export { getOrders, getOrder, createOrder, updateOrder, deleteOrder };
