const {server} = require('./app');
const PORT = 3001;
const { conn } = require('./db/DB_connection')


server.listen(PORT, () => {
    console.log('Server raiset in port: ', PORT);
    conn.sync({force: true});
});
