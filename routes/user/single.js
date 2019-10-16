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

/* GET user edit */
router.get('/:id/edit', function (req, res, next) {
    let id = req.params.id;
    let query = `SELECT * FROM user WHERE id = ${id}`;
    let action = `${id}/edit`

    connection.query(query, function (err, user, fields) {
        if (err) throw err;
        res.render('user/single', {
            title: 'User edit',
            action: action,
            method: 'PUT',
            user: user[0],
        });
    });
    // connection.end();
});

/* PUT user edit */

/* GET user create */
router.get('/create', function (req, res, next) {
    res.render('user/single', {
        title: 'User create',
        action: 'create',
        method: 'POST',
        user: [],
    });
});

/* POST user create */
router.post('/create', function (req, res, next) {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let query = `INSERT INTO user (fname, lname) VALUES ('${fname}', '${lname}')`;

    connection.query(query, function (err, user, fields) {
        if (err) throw err;
        // redirect to user list
        res.redirect('../users');
    });
});

/* DELETE user create */
router.delete('/:id/delete?', function (req, res, next) {
    // let id = req.params.id;
    // console.log('asdfasdf');
    let query = `DELETE FROM user where id = 13`;

    connection.query(query, function (err, user, fields) {
        if (err) throw err;
        // redirect to user list
        res.redirect('../users');
    });
});

module.exports = router;
