const Room = require('../models/Room');

// Registrar una nueva habitación
exports.createRoom = async (req, res) => {
    try {
        const { room_number, room_type, status } = req.body;

        const existingRoom = await Room.findOne({ room_number });
        if (existingRoom) {
            return res.status(400).json({ message: 'Room already exists' });
        }

        const room = new Room({ room_number, room_type, status });
        await room.save();

        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ message: 'Error creating room', error: error.message });
    }
};

// Actualizar el estado de una habitación
exports.updateRoomStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const { id } = req.params;

        const room = await Room.findByIdAndUpdate(id, { status }, { new: true });
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.json(room);
    } catch (error) {
        res.status(500).json({ message: 'Error updating room status', error: error.message });
    }
};
