const express = require('express');
const router = express.Router();
const userController = require("../controllers/user");

/* GET users list */
router.get('/users', userController.list_all);
/* GET user show */
router.get('/user/:id/show', userController.show);
/* add user */
router.get('/user/add', userController.create_get);
/* create user */
router.post('/user/add', userController.create_post);
/* edit user */
router.get('/user/:id/edit', userController.edit_get);
/* edit user */
router.post('/user/:id/edit', userController.edit_post);
/* delete user */
router.get('/user/:id/delete', userController.delete);

module.exports = router;
