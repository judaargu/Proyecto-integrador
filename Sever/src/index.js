const http = require('http');
const {getCharacterById} = require('./controllers/getCharById');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
        if (req.url.includes('/rickandmorty/character/')){
            let id = req.url.split('/').find(element => Number(element) < 900 && Number(element) > 0);
            getCharacterById(res, id);
        } else {
            res.end('Default');
        }
    // if (req.url.includes('/rickandmorty/character/')){
    //     var arr = req.url.split('/');
    //     data.forEach(character => {
    //         if (character.id === Number(arr[arr.length -1])){
    //             return res.end(JSON.stringify(character));
    //         }
    //     })
    // } else{
    //     res.end('Default');
    // }

}).listen(3001);