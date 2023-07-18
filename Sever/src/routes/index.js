const { getCharacterById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const { login } = require("../controllers/login");
const express = require('express');
const routerChar = express.Router();
const routerLog = express.Router();
const routerFav = express.Router();
const routerDelFav = express.Router();

routerChar.get('/character/:id', getCharacterById);
routerLog.get('/login', login);
routerFav.post('/fav', postFav);
routerDelFav.delete('/fav/:id', deleteFav);

module.exports = {
    routerChar,
    routerLog,
    routerFav,
    routerDelFav,
}

