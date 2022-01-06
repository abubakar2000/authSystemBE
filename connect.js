var mysql = require('mysql')
require('dotenv').config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

connection.connect(err => {
    let message = !err ? 'connected' : 'connection failed';
    console.log('mysql : ${message}');
});

module.exports = connection;