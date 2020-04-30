const express = require('express');
const router = express.Router();

const userController = require('../../controllers/admin/user');


router.get('/login', userController.userLogin);
router.post('/login', userController.postUserLogin);
router.get('/signup', userController.getSignup);
router.post('/signup', userController.postSignup);

module.exports = router;