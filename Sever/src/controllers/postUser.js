const { User } = require('../db/DB_connection');

const postUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email !== ' ' && password !== ' ' && email && password){
            const user = await User.findOrCreate({where: {email}, defaults: {password}});
            return res.json(user);
        }else{
            return res.status(404).json({error: 'faltan datos'});
        }
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = {
    postUser,
}
