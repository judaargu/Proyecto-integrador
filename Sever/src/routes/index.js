const { getCharacterById } = require("../controllers/getCharById");
const { getAudio } = require('../controllers/getAudio');
const { login } = require("../controllers/login");
const { postFav } = require('../controllers/postFav');
const { deleteFav } = require('../controllers/deleteFav');
const { postUser } = require('../controllers/postUser');
const express = require('express');
const routerChar = express.Router();
const routerLog = express.Router();
const routerPostLog = express.Router();
const routerFav = express.Router();
const routerDelFav = express.Router();
const routerAudio = express.Router();


routerChar.get('/character/:id', getCharacterById);
routerAudio.get('/audio', getAudio);
routerLog.get('/login', login);
routerPostLog.post('/login', postUser);
routerFav.post('/fav', postFav);
routerDelFav.delete('/fav/:id', deleteFav);


module.exports = {
    routerChar,
    routerLog,
    routerPostLog,
    routerFav,
    routerDelFav,
    routerAudio,
}

