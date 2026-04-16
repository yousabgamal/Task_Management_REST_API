const taskControllers = require('../controllers/usersControllers');
const express = require('express');
const router = express.Router();

router.route('/register').post(taskControllers.register);
router.route('/login').post(taskControllers.login);

module.exports = router;    