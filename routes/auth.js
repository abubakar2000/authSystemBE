var express = require('express');
const connection = require('../connect');
var router = express.Router();
var server = require('../connect');
var conf = require('./configurations.json');
var mysql = require('mysql')

router.get('/', (req, res, next) => {

    connection.query('SELECT * FROM user', (err, results, fields) => {
        !err ? res.json(results) : res.json({ err });
    });
});



router.post('/register', (req, res) => {
    
    var connection = mysql.createConnection({
        host: conf.host,
        user: conf.user,
        password: conf.password,
        database: conf.database
    })
    var user = {
        email: 's@gmail.com',
        password: '12345',
        profile_img: 'hhhhhhhhhhhhhhhhhhhhhhhhhhh',
        name: 's',
        address: "18-b isb"
    }
    connection.connect()
    connection.query("INSERT into user(email,password,profile_img,name,address) values('@gmail.com','12345','fffff','saram','13-b')", function (err, rows, fields) {
        if (err) console.log(err);
      
    })
    connection.end()
    res.send("Bakar Badmaash");
})


// user registration
router.post('/post-register', function (req, res, next) {
    if (!errors || true) {   //No errors were found.  Passed Validation!
        var user = {
            email: 's@gmail.com',
            password: '12345',
            profile_img: 'hhhhhhhhhhhhhhhhhhhhhhhhhhh',
            name: 's',
            address: "18-b isb"
        }
        connection.query('INSERT INTO users SET ?', user, function (err, result) {
            if (err) {
                req.flash('error', err)


            } else {
                req.flash('success', 'You have successfully signup!');

            }
        });
    }


});




module.exports = router;