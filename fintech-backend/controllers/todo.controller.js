const {asyncHandler} = require('../util/helper');
const todoService = require('../services/todo.service');

exports.getTodoById = asyncHandler(async (req,res) => {

    let getTodoByIdResponse = await todoService.getTodoById(req.body.id);
    if(!getTodoByIdResponse){
        return HELPER.sendResponse(res, 500, ERROR_CODES.CANT_CREATE)
    }
    return HELPER.sendResponse(res, 200, getTodoByIdResponse)

});

exports.getAllTodos = asyncHandler(async (req,res) => {

    let getTodoResponse = await todoService.getAllTodos();
    if(!getTodoResponse){
        return HELPER.sendResponse(res, 500, ERROR_CODES.CANT_CREATE)
    }
    return HELPER.sendResponse(res, 200, getTodoResponse)

});

exports.createTodo = asyncHandler(async (req,res) => {

    let createTodoRespone = await todoService.createTodo(req.body.note);
    if(!createTodoRespone){
        return HELPER.sendResponse(res, 500, ERROR_CODES.CANT_CREATE)
    }
    return HELPER.sendResponse(res, 201, createTodoRespone)

});

exports.updateTodo = asyncHandler(async (req,res) => {

    let updateTodoRespone = await todoService.updateTodo(req.body.id,req.body.note);
    if(!updateTodoRespone){
        return HELPER.sendResponse(res, 500, ERROR_CODE)
    }
    return HELPER.sendResponse(res, 201, updateTodoRespone)

});

exports.deleteTodo = asyncHandler(async (req,res) => {

    let deleteTodoResponse = await todoService.deleteTodo(req.body.id);
    if(!deleteTodoResponse){
        return HELPER.sendResponse(res, 500, ERROR_CODE)
    }
    return HELPER.sendResponse(res, 200, deleteTodoResponse)

});