const db = require('../config/config.json');
const User = db.user;

// FETCH all Customers
exports.findAll = (req, res) => {
    User.findAll().then(users => {
        // Send all users to Client
        return users;
    });
};