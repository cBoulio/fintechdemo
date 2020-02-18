const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

router.get('/getTodoById', todoController.getTodoById);   
router.get('/getAllTodos', todoController.getAllTodos); 
router.post('/createTodo', todoController.createTodo); 
router.put('/updateTodo', todoController.updateTodo); 
router.delete('/deleteTodo', todoController.updateTodo); 

module.exports = router;