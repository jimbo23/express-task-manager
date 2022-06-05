import { TaskModel } from "../models/tasksModel";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ completed: true });
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = await TaskModel.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export const getTask = (req, res) => {
  res.send("get one task");
};

export const updateTask = (req, res) => {
  res.send("update task");
};

export const deleteTask = (req, res) => {
  res.send("delete task");
};
