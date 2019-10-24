var models = require("../models");
const User = models.user;

module.exports = {
    /**
     * Users show list
     *
     * @method GET
     * @param req
     * @param res
     * @param next
     */
    list_all: (req, res, next) => {
        User.findAll().then(function(users) {
            res.render('user/list', {
                title: 'Users',
                users: users
            });
        });
    },
    /**
     * User show
     *
     * @method GET
     * @param req
     * @param res
     * @param next
     */
    show: (req, res, next) => {
        console.log('show test');
        let id = parseInt(req.params.id);
        let action = `${id}/edit`;

        User.findByPk(id).then(function(user) {
            res.render('user/single', {
                title: 'Show user',
                action: action,
                method: 'POST',
                user: user,
            });
        });
    },
    /**
     * User show create
     *
     * @method GET
     * @param req
     * @param res
     * @param next
     */
    create_show: (req, res, next) => {
        res.render('user/single', {
            title: 'User add',
            action: 'add',
            method: 'POST',
            user: []
        });
    },
    /**
     * User create
     *
     * @method POST
     * @param req
     * @param res
     * @param next
     */
    create: (req, res, next) => {
        let fname = req.body.fname;
        let lname = req.body.lname;
        const user = User.build({ fname: fname, lname: lname });

        user.save().then(() => {
            // go to user list page if user created
            res.redirect('../users');
        }).finally(() => {

        });
    },
    /**
     * User edit
     *
     * @method POST
     * @param req
     * @param res
     * @param next
     */
    edit: (req, res, next) => {
        let id = req.params.id;
        let fname = req.body.fname;
        let lname = req.body.lname;
        const user = User.update(
            { fname: fname, lname: lname },
            { where: { id: id}}
        );

        user.then(() => {

        }).finally(() => {

        });
    },
    /**
     * User delete
     *
     * @method DELETE
     * @param req
     * @param res
     * @param next
     */
    delete: (req, res, next) => {
        let id = parseInt(req.params.id);

        User.destroy({ where: { id: id } }).then(function(){
            res.redirect('../users');
        });
    }
};