const taskModel = require("../models/taskModel");

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find(); // Fetch all tasks from the database
    res.status(200).json({ message: "Tasks retrieved successfully", data: tasks });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// Get a specific task by ID
const getTaskById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const task = await taskModel.findById(id); // Fetch a task by its ID
    if (task) {
      res.status(200).json({ message: "Task retrieved successfully", data: task });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// Add a new task
const addTask = async (req, res) => {
  try {
    const newTask = new taskModel(req.body); // Create a new task instance
    await newTask.save(); // Save the new task to the database
    res.status(201).json({ message: "Task added successfully", data: newTask });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// Update an existing task
const updateTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updatedTask = await taskModel.findByIdAndUpdate(id, req.body, { new: true }); // Update the task
    if (updatedTask) {
      res.status(200).json({ message: "Task updated successfully", data: updatedTask });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedTask = await taskModel.findByIdAndDelete(id); // Delete the task
    if (deletedTask) {
      res.status(200).json({ message: "Task deleted successfully", data: deletedTask });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};