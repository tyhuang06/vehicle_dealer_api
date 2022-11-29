import express from 'express';
import session from 'express-session';
import 'dotenv/config';
import cors from 'cors';
import http from 'http';
import path from 'path';
import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';
import vehicleRoutes from './routes/vehicleRoutes.js';

const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);

// TODO: Enable CORS (for frontend development)

// Enable session management
// Should change to JWT token in the future
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
	})
);
app.use(express.json()); // to accept json data

// TODO: Add routes
app.use('/auth', authRoutes);
app.use('/order', orderRoutes);
app.use('/reservation', reservationRoutes);
app.use('/vehicle', vehicleRoutes);

server.listen(PORT, console.log(`Server listening on port ${PORT}...`));
