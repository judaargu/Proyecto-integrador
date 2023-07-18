const usuarios = require('../utils/users');

const login = (req, res) => {
    const {email} = req.query;
    const {password} = req.query;

    if (email && password){
        user = usuarios.find(us => us.email === email && us.password === password);
        
        if (user){
            res.status(200);
            res.json({access:true});
        } else {
            res.status(200);
            res.json({access:false});
        }
    }

}

module.exports = {
    login,
}