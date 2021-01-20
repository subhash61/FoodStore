const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post(`/signup`, authController.signup);
// router.post(`/login`, authController.login);
// router.get(`/logout`, authController.logout);

router.route('/').get(userController.getAllUsers).get(userController.getUser);
router.route('/:id').patch(userController.updateUser).delete(userController.deleteUser);

module.exports = router;
