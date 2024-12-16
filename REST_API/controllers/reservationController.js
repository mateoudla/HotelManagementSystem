const axios = require('axios');
const Reservation = require('../models/Reservation');

// Crear una reserva
exports.createReservation = async (req, res) => {
    try {
        const { room_number, customer_name, start_date, end_date, room_type } = req.body;

        // Llamar al servicio SOAP para verificar disponibilidad
        const soapResponse = await axios.post('http://localhost:9090/soap/availability', `
            <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hot="http://soap.hotel.com/">
                <soapenv:Header/>
                <soapenv:Body>
                    <hot:checkAvailability>
                        <startDate>${start_date}</startDate>
                        <endDate>${end_date}</endDate>
                        <roomType>${room_type}</roomType>
                    </hot:checkAvailability>
                </soapenv:Body>
            </soapenv:Envelope>
        `, {
            headers: { 'Content-Type': 'text/xml' }
        });

        // Verificar la respuesta del servicio SOAP
        if (!soapResponse.data.includes('Available')) {
            return res.status(400).json({ message: 'Room not available' });
        }

        // Crear la reserva en MongoDB
        const reservation = new Reservation({ room_number, customer_name, start_date, end_date });
        await reservation.save();

        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ message: 'Error creating reservation', error: error.message });
    }
};

// Consultar una reserva
exports.getReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
        res.json(reservation);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reservation', error: error.message });
    }
};

// Cancelar una reserva
exports.cancelReservation = async (req, res) => {
    try {
        await Reservation.findByIdAndDelete(req.params.id);
        res.json({ message: 'Reservation canceled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error canceling reservation', error: error.message });
    }
};
