const mongoose = require('mongoose');

const importedTodoSchema = require('../schemas/todo');

const TodoSchema = mongoose.Schema(importedTodoSchema);

const TodoModel = mongoose.model('todos', TodoSchema);

module.exports = {
	todos: TodoModel,
}