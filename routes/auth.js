var express = require('express');
const connection = require('../connect');
var router = express.Router();
var server = require('../connect');

router.get('/', (req, res, next) => {
    
    connection.query('SELECT * FROM user', (err, results, fields) => {
        !err ? res.json(results) : res.json({ err });
    });
});


module.exports = router;