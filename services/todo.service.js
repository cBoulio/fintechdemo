const {pool} = require('../config/db_connection');

exports.getTodoById = async (id) => {
    return new Promise(async (resolve,reject) =>{
        pool.query('SELECT * FROM tasks WHERE id = $1', [id], (error, results) => {
            if (error) {
              throw error
            }
            resolve(JSON.stringify(results.rows));
        })
    });
};

exports.getAllTodos = async () => {
    return new Promise(async (resolve,reject) =>{
        pool.query('SELECT * FROM tasks ORDER BY id ASC', (error, results) => {
            if (error) {
              throw error
            }
            resolve(JSON.stringify(results.rows));
        })
    });
};

exports.createTodo = async (note) => {
    return new Promise(async (resolve,reject) =>{
        pool.query('INSERT INTO tasks (note) VALUES ($1)', [note], (error, results) => {
            if (error) {
              throw error
            }
            resolve(`Task added with ID: ${results.id}`)
        })
    });
};

exports.updateTodo = async (id,note) => {
    return new Promise(async (resolve,reject) =>{
        pool.query('UPDATE tasks SET note = $1 WHERE id = $2', [note, id],(error, results) => {
              if (error) {
                throw error
              }
              resolve(`Task modified with ID: ${id}`)
            }
          )
    });
};

exports.deleteTodo = async (id) => {
    return new Promise(async (resolve,reject) =>{
        pool.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
            if (error) {
              throw error
            }
            resolve(`User deleted with ID: ${id}`)
        })
    });
};








