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

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findOne({ _id: id });

    if (!task) {
      return res.status(404).json({ msg: `Task ${id} not found!` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export const updateTask = (req, res) => {
  res.send("update task");
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findOneAndDelete({ _id: id });

    if (!task) {
      return res.status(404).json({ msg: `Task ${id} not found!` });
    }
    res.status(200).json({ task });
  } catch (e) {
    res.status(500).json({ msg: err });
  }
};
