const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');




// BASIC CRUD
router.post('/todo', todoController.createTodo);   // C
router.get('/todo', todoController.getTodo);       // R
router.put('/todo', todoController.updateTodo);    // U
router.delete('/todo', todoController.deleteTodo); // D




module.exports = router;