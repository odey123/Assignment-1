const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.post('/', async (req, res) => {
  try {

    const { title, description, dueDate, priority} = req.body
    
    const todo = new Todo({
        title,
        description,
        dueDate,
        priority
    });

    const savedTodo = await todo.save();
    res.status(201).send(todo);
}   catch (err) {
    res.status(400).send(err)
}
});

router.get('/', async (req, res) => {
    try {
      const todos = await Todo.find();
      res.status(200).send(todos);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
 
  router.put('/:id', async (req, res) => {
    try {
      const { title, description, dueDate, priority } = req.body;
      const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        { title, description, dueDate, priority },
        { new: true }
      );
      if (!todo) return res.status(404).send('Todo not found');
      res.status(200).send(todo);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  
  router.delete('/:id', async (req, res) => {
    try {
      const todo = await Todo.findByIdAndDelete(req.params.id);
      if (!todo) return res.status(404).send('Todo not found');
      res.status(200).send({ message: 'Todo deleted', todo });
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  module.exports = router;