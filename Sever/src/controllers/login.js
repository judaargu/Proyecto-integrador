const { User } = require("../db/DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (email && password) {
      const user = await User.findAll({ where: { email } });
      if (!user){
        return res.status(404).json({error: 'Usuario no encontrado'});
      }
      if (user[0].dataValues.password === password) {
        return res.json({ access: true });
      } else {
        return res.status(403).json({ error: "Contraseña incorrecta" });
      }
    } else {
      return res.status(400).json({ error: "Faltan datos" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  login,
};
