import { TaskModel } from "../models/tasksModel";
import { asyncWrapper } from "../middlewares/async";
import { createCustomError } from "../errors/custom-error";

export const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await TaskModel.find({});
  res.status(200).json({ tasks });
});

export const createTask = asyncWrapper(async (req, res) => {
  const task = await TaskModel.create(req.body);
  res.status(201).json({ task });
});

export const getTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await TaskModel.findOne({ _id: id });

  if (!task) {
    return next(createCustomError(`Task ${id} not found!`, 404));
  }

  res.status(200).json({ task });
});

export const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await TaskModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ msg: `Task ${id} not found!` });
  }

  res.status(201).json({ status: 201, data: task });
});

export const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await TaskModel.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(404).json({ msg: `Task ${id} not found!` });
  }
  res.status(200).json({ task });
});
