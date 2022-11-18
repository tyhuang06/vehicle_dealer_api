import express from 'express';
import cors from 'cors';
import http from 'http';
import userRoutes from './routes/userRoutes.js';

const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);

// TODO: Enable CORS (for frontend development)

app.use(express.json()); // to accept json data

// TODO: Add routes
app.use('/user', userRoutes);

server.listen(PORT, console.log(`Server listening on port ${PORT}...`));
