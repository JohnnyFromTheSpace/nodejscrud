var express = require('express');
var router = express.Router();
// var mysql = require('mysql');
var models = require("../../models");

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'expressjs'
// });
// connection.connect();

/* GET user edit */
router.get('/:id/show', function (req, res, next) {
    let id = req.params.id;
    let action = `${id}/edit`;

    models.user.findByPk(id).then(function(user) {
        res.render('user/single', {
            title: 'Show user',
            action: action,
            method: 'PUT',
            user: user,
        });
    });
});

/* PUT user edit */

// /* GET user create */
// router.get('/create', function (req, res, next) {
//     res.render('user/single', {
//         title: 'User create',
//         action: 'create',
//         method: 'POST',
//         user: [],
//     });
// });

// /* POST user create */
// router.post('/create', function (req, res, next) {
//     let fname = req.body.fname;
//     let lname = req.body.lname;
//     let query = `INSERT INTO user (fname, lname) VALUES ('${fname}', '${lname}')`;
//
//     connection.query(query, function (err, user, fields) {
//         if (err) throw err;
//         // redirect to user list
//         res.redirect('../users');
//     });
// });
//
// /* DELETE user create */
// router.delete('/:id/delete?', function (req, res, next) {
//     // let id = req.params.id;
//     // console.log('asdfasdf');
//     let query = `DELETE FROM user where id = 13`;
//
//     connection.query(query, function (err, user, fields) {
//         if (err) throw err;
//         // redirect to user list
//         res.redirect('../users');
//     });
// });

module.exports = router;
