const express = require('express');
const router = express.Router();
const { Sequelize, Model, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json')[env];
let sequelize;
if (config.use_env_variable)
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
else
    sequelize = new Sequelize(config.database, config.username, config.password, config);
var models = require("../../models");

// check connection to db
sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
}).finally(() => {
    sequelize.close();
});

/* GET users listing. */
router.get('/', function (req, res, next) {
    models.user.findAll().then(function(users) {
        res.render('user/list', {
            title: 'Users',
            users: users
        });
    });
});

module.exports = router;
