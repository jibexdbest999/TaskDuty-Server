const express = require("express");
const router = express.Router();
const Task = require("../Models/Task");
const authMiddleware = require("../Middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, user: req.user.userId });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
    {
      _id: req.params.id,
      user: req.user.userId,
    },
      req.body,
      { new: true }
    );

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Task.findByIdAndDelete({ _id: req.params.id, user: req.user.userId });

    res.status(200).json({
      message: "Task deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;