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
        User.findAll().then(function (users) {
            res.render('user/index', {
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
        let id = parseInt(req.params.id);

        User.findByPk(id).then(function (user) {
            res.render('user/show', user.dataValues);
        });
    },
    /**
     * User create, blank page for new user
     *
     * @method GET
     * @param req
     * @param res
     * @param next
     */
    create_get: (req, res, next) => {
        res.render('user/create');
    },
    /**
     * User create
     *
     * @method POST
     * @param req
     * @param res
     * @param next
     */
    create_post: (req, res, next) => {
        User.create({
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            email: req.body.email,
        }).then(() => {
            // go to user list page if user created
            res.redirect('../users');
        }).catch((err) => {
            res.render('error', err);
        }).finally(() => {

        });
    },
    /**
     * User edit
     *
     * @method GET
     * @param req
     * @param res
     * @param next
     */
    edit_get: (req, res, next) => {
        let id = parseInt(req.params.id);
        User.findByPk(id).then(function (user) {
            res.render('user/edit', user.dataValues);
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
    edit_post: (req, res, next) => {
        const user = {
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            email: req.body.email
        };
        User.update(user, {
            where: {
                id: req.params.id
            }
        }).then((user) => {
            res.redirect('/users')
        }).catch((err) => {
            res.render('error', err);
        })
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

        User.destroy({where: {id: id}}).then(function () {
            res.redirect('/users');
        });
    }
};