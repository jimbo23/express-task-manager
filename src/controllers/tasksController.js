import { TaskModel } from "../models/tasksModel";

export const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

export const createTask = async (req, res) => {
  try {
    const task = await TaskModel.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(400).json({ err });
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
