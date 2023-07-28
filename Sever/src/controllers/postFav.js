const { Favorite } = require("../db/DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender } = req.body;
  
  try {
    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).json({ error: "Faltan datos" });
    } else {
      await Favorite.findOrCreate({
        where: { name },
        defaults: { id, origin, status, species, gender, image },
      });
      const allCharacters = await Favorite.findAll();
      return res.json(allCharacters);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postFav,
}
