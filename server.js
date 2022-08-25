const express = require('express');
const cors = require('cors');
const app = express();
const port = 8011;
require('./server/config/mongoose.config')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const playerRoutes = require('./server/routes/player.routes');
playerRoutes(app);
app.listen(port, () => {
    console.log("The server listening on port " + port);
});