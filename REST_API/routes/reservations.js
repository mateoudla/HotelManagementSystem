const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Rutas CRUD para reservas
router.post('/', reservationController.createReservation);
router.get('/:id', reservationController.getReservation);
router.delete('/:id', reservationController.cancelReservation);

module.exports = router;
