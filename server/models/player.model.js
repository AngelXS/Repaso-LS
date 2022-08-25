const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es obligatorio'],
        minlength: [3,'Name must be at least 2 characters in length']
    },
    position: {
        type: String
    },
    action: {
        type: String,
        required: [true, 'Action is mandatory']
    }
});
const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;
