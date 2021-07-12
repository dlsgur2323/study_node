var mysql = require('mysql');

const conn = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'node',
    password : 'node',
    database : 'node'
});
module.exports = conn;