var express = require('express');
var router = express.Router();
var server = require('./config/serverinfo.json');

router.get('/', (req, res) => {
    res.send('Hello saram');
})
router.get('/ab/:input', (req, res) => {
    console.log(server.host);
    
    res.send(`hello abubakar with ${req.params.input} ${req.query.api}`);
})

module.exports = router;