const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Ruta para registrar una nueva habitación
router.post('/', roomController.createRoom);

// Ruta para actualizar el estado de una habitación
router.patch('/:id', roomController.updateRoomStatus);

module.exports = router;
