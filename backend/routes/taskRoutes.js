const express = require('express');
const { createTask, getTasks } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/createTas', authMiddleware, createTask);
router.get('/getTask', authMiddleware, getTasks);

module.exports = router;
