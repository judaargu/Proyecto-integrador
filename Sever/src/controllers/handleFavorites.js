let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body);
    return res.json(myFavorites);
}

const deleteFav = (req, res) => {
    let {id} = req.params;
    let newFavorites = myFavorites.filter(char => char.id !== Number(id));
    myFavorites = newFavorites;
    return res.json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav,
}