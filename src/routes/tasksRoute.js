import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasksController";

export const tasksRouter = express.Router();

tasksRouter.route("/").get(getAllTasks).post(createTask);

tasksRouter.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);
