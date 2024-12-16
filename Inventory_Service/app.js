const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const roomRoutes = require('./routes/rooms');

const app = express();

// Conexión a MongoDB
connectDB();

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use('/rooms', roomRoutes);

// Puerto
const PORT = 4000;
app.listen(PORT, () => console.log(`Inventory Service running at http://localhost:${PORT}`));
