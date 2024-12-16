const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const reservationRoutes = require('./routes/reservations');

const app = express();

// Conexión a MongoDB
connectDB();

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use('/reservations', reservationRoutes);

// Puerto
const PORT = 3000;
app.listen(PORT, () => console.log(`API REST running at http://localhost:${PORT}`));
