import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 chars"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const TaskModel = mongoose.model("Task", TaskSchema);
