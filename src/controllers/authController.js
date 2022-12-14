import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import connection from '../config/db.js';

// @desc    Register a new user
// @route   POST /auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const { email, password, firstName, lastName } = req.body;

	// Check if user already exists
	connection.query(
		`SELECT * FROM customer WHERE email = '${email}'`,
		async (err, result) => {
			if (err) throw err;

			if (result.length > 0) {
				res.status(401);
				res.send('User already exists');
			}

			if (result.length === 0) {
				// Encrypt password
				const salt = await bcrypt.genSalt(10);
				const encryptedPassword = await bcrypt.hash(password, salt);

				// Insert user into database
				connection.query(
					`INSERT INTO customer (email, password, first_name, last_name) 
					VALUES ('${email}', '${encryptedPassword}', '${firstName}', '${lastName}')`,
					(err, result) => {
						if (err) throw err;
						console.log('User registered successfully!');

						connection.query(
							`SELECT * FROM customer WHERE email = '${email}'`,
							(err, result) => {
								if (err) throw err;
								res.send(result[0]);
							}
						);
					}
				);
			}
		}
	);
});

// @desc    Login a user
// @route   POST /auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	connection.query(
		`SELECT * FROM customer WHERE email = '${email}'`,
		async (err, result) => {
			if (err) throw err;

			if (result.length > 0) {
				// Check if password is correct
				const isPasswordCorrect = await bcrypt.compare(
					password,
					result[0].password
				);

				if (isPasswordCorrect) {
					// Login user
					req.session.loggedin = true;
					req.session.userId = result[0].id;
					req.session.username = result[0].username;

					res.json(result[0]);
				} else {
					res.status(401);
					res.send('Incorrect password');
				}
			} else {
				res.status(401);
				res.send('User does not exist');
			}
		}
	);
});

// @desc    Logout a user
// @route   POST /auth/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
	req.session.destroy();
	res.send('Logged out successfully!');
});

export { registerUser, loginUser, logoutUser };
