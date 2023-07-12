const http = require('http');
const data = require('../utils/data')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url.includes('/rickandmorty/character/')){
        var arr = req.url.split('/');
        data.forEach(character => {
            if (character.id == arr[arr.length -1]){
                return res.end(JSON.stringify(character));
            }
        })
    } else{
        res.end('Default');
    }   
}).listen(3001);