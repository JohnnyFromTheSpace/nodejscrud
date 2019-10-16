var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'expressjs'
});
connection.connect();

/* GET users listing. */
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM user', function (err, users, fields) {
        if (err) throw err;
        res.render('user/list', {
            title: 'Users',
            users: users,
        });
    });
    // connection.end();
});

module.exports = router;
