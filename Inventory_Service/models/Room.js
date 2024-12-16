const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    room_number: { type: Number, required: true, unique: true },
    room_type: { type: String, required: true },
    status: { type: String, enum: ['available', 'maintenance', 'occupied'], default: 'available' }
});

module.exports = mongoose.model('Room', roomSchema);
