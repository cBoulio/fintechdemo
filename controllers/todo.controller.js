const {asyncHandler} = require('../util/helper');
const ERROR_CODE = require('../util/message_codes');
const todoService = require('../services/todo.service');

exports.createTodo = asyncHandler(async (req,res) => {

    let createTodoRespone = await todoService.createTodo();
    if(!createTodoRespone){
        return HELPER.sendResponse(res, 500, ERROR_CODE)
    }
    return HELPER.sendResponse(res, 201, createTodoResponepokemon)

});

exports.getTodo = asyncHandler(async (req,res) => {

    let getTodoResponse = await todoService.getTodo();
    if(!getTodoResponse){
        return HELPER.sendResponse(res, 500, ERROR_CODE)
    }
    return HELPER.sendResponse(res, 200, getTodoResponse)

});

exports.updateTodo = asyncHandler(async (req,res) => {

    let updateTodoRespone = await todoService.updateTodo();
    if(!updateTodoRespone){
        return HELPER.sendResponse(res, 500, ERROR_CODE)
    }
    return HELPER.sendResponse(res, 201, updateTodoRespone)

});

exports.deleteTodo = asyncHandler(async (req,res) => {

    let deleteTodoResponse = await todoService.deleteTodo();
    if(!deleteTodoResponse){
        return HELPER.sendResponse(res, 500, ERROR_CODE)
    }
    return HELPER.sendResponse(res, 200, deleteTodoResponse)

});