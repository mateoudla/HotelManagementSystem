const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    room_number: Number,
    customer_name: String,
    start_date: Date,
    end_date: Date,
    status: { type: String, default: 'active' }
});

module.exports = mongoose.model('Reservation', reservationSchema);
