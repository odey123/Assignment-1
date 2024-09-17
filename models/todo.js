const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: {type: String, required: true},
    dueDate: {type: Date },
    priority: { type: Number, 
                default: 1, 
                max: 5},
    completed: {type: Boolean, default: false}
    
});

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;