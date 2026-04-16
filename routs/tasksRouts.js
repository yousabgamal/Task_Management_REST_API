const taskControllers = require('../controllers/taskControllers');
const express = require('express');
const router = express.Router();

router.route('/')
    .post(taskControllers.addTask)
    .get(taskControllers.getAllTasks);

router.route('/:taskID')
    .get(taskControllers.getTaskByID)
    .delete(taskControllers.deleteTask)
    .patch(taskControllers.updateTask);

router.route('/status/:taskStatus')
    .get(taskControllers.getTaskByStatus);

module.exports = router;    