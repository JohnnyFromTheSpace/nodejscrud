const express = require('express');
const router = express.Router();
const userController = require("../controllers/user");

/* GET users list */
router.get('/users', userController.list_all);
/* GET user show */
router.get('/user/:id/show', userController.show);
/* GET user create */
router.get('/user/add', userController.create_show);
/* POST user create */
router.post('/user/add', userController.create);
/* PUT user edit */
router.post('/user/:id/edit', userController.edit);
/* DELETE user */
router.post('/user/:id', userController.delete);

module.exports = router;
