const PlayerController = require('../controllers/player.controller');

module.exports = function(app){
    app.post('/api/player/new',PlayerController.ingresar);
    app.get('/api/players/list',PlayerController.obtenerLista);
    app.delete('/api/player/:id/delete',PlayerController.eliminar);
    app.get('/api/player/:id/search',PlayerController.encontrarUno);
    app.put('/api/player/:id/update/action/:action',PlayerController.updateAction);
}