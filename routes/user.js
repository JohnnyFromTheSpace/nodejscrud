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
router.get('/', function(req, res, next) {

  connection.query('SELECT * FROM user', function (err, rows, fields) {
    if (err) throw err;
    res.send(rows);
  });

  connection.end()
});

module.exports = router;
