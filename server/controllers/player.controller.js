const Player= require('../models/player.model');

module.exports.ingresar = (request, response) => {
    const { nombre, position, action} = request.body;
    Player.create({
        nombre, position, action
    })
        .then((player) => response.json({newPlayer: player, msg: "Player agregado correctamente"}))
        .catch(err => response.status(400).json(err))
};
module.exports.encontrarUno = (request, response) => {
    Player.findOne({_id: request.params.id})
        .then((player) => response.json({newPlayer: player, msg: "Player encontrado correctamente"}))
        .catch(err => response.status(400).json({err: err, msg: "Error al encontrar player"}))
}
module.exports.obtenerLista = (request, response) => {
    Player.find({})
        .then((players) => response.json(players))
        .catch(err => response.status(400).json({err: err, msg: "No se pudo obtener la lista de jugadores"}))
}
module.exports.eliminar = (request, response) => {
    Player.findOneAndDelete({_id: request.params.id})
        .then((player) => response.json({playerDelete: player, msg: "Player eliminado correctamente"}))
        .catch(err => response.status(400).json({err: err, msg: "No se pudo eliminar"}))
}
module.exports.updateAction= (request, response) => {
    console.log(request.params.id + " "+ request.body);
    Player.findOneAndUpdate({_id: request.params.id}, {
        ...request.params, action: request.params.action
    }, {new: true})
        .then((player) => response.json({playerUpdate: player, msg: "Estado actualizado con éxito"}))
        .catch(err => response.status(404).json({err: err, msg: "No se pudo actualizar"}))
}