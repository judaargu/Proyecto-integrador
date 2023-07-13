const axios = require('axios');

const getCharacterById = (res, id) => {

    let promise = new Promise((resolve, reject) => {
        var props = {};
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
            if (data){
                props = {
                    id : data.id,
                    name : data.name,
                    gender : data.gender,
                    species : data.species,
                    origin : data.origin,
                    image : data.image,
                    status : data.status,
                }
            // resolve({status:200, data:JSON.stringify(props)});
            res.writeHead(200);
            res.end(JSON.stringify(props));
            resolve(res);
            }
        });
    }).then(data => console.log(data.status))
    .catch((message) => {
        res.writeHead(500, {'Content-Type' : 'text/plain'});
        res.end(message);
        return res
    });
    return promise;
}

module.exports = {
    getCharacterById,
}