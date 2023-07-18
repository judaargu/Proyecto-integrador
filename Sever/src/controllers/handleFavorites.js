let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body);
    console.log(myFavorites);
    return res.json(myFavorites);
}

const deleteFav = (req, res) => {
    let {id} = req.params;
    let newFavorites = myFavorites.filter(char => char.id !== Number(id));
    myFavorites = newFavorites;

    return res.json(newFavorites);
}

module.exports = {
    postFav,
    deleteFav,
}