import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

export const TaskModel = mongoose.model("Task", TaskSchema);
