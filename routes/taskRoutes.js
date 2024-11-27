const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/api/task", getAllTasks);
router.get("/api/task/:id", getTaskById);
router.post("/api/task", addTask);
router.put("/api/task/:id", updateTask);
router.delete("/api/task/:id", deleteTask);

module.exports = router;