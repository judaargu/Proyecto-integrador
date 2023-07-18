const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

async function getCharacterById (req, res) {
  let props = {};
  let { id } = req.params;

  try {
    let {data} = await axios(`${URL}/${id}`);
    
    if (data.error) {
        return res.status(404).send(data.error);

    }

    props = {
    id: data.id,
    name: data.name,
    gender: data.gender,
    species: data.species,
    origin: data.origin,
    image: data.image,
    status: data.status,

    };
    return res.status(200).json(props);

  } catch (error) {
    return res.status(500).send(error.message); 

  }

//   axios(`${URL}/${id}`).then(({ data }) => {
    
//     if (data.error) {
//       return res.status(404).send(data.error);

//     }

//     props = {
//     id: data.id,
//     name: data.name,
//     gender: data.gender,
//     species: data.species,
//     origin: data.origin,
//     image: data.image,
//     status: data.status,

//     };
//     return res.status(200).json(props);

//     })
//     .catch((error) => {
//         return res.status(500).send(error.message);
//     })
};

module.exports = {
  getCharacterById,
};
