const express = require('express');
const morgan = require('morgan');
const server = express();
const PORT = 3001;
const {routerChar, routerLog, routerFav, routerDelFav} = require('./routes/index');

server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});


server.use('/rickandmorty', routerChar);
server.use('/rickandmorty', routerLog);
server.use('/rickandmorty', routerFav);
server.use('/rickandmorty', routerDelFav);


server.listen(PORT, () => {
    console.log('Server raiset in port: ', PORT);
});



// const http = require('http');
// const {getCharacterById} = require('./controllers/getCharById');

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//         if (req.url.includes('/rickandmorty/character/')){
//             let id = req.url.split('/').find(element => Number(element) < 900 && Number(element) > 0);
//             getCharacterById(res, id);
//         } else {
//             res.end('Default');
//         }
//     // if (req.url.includes('/rickandmorty/character/')){
//     //     var arr = req.url.split('/');
//     //     data.forEach(character => {
//     //         if (character.id === Number(arr[arr.length -1])){
//     //             return res.end(JSON.stringify(character));
//     //         }
//     //     })
//     // } else{
//     //     res.end('Default');
//     // }

// }).listen(3001);