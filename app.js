import express from "express";
import { tasksRouter } from "./src/routes/tasksRoute";
import { connectDB } from "./src/db/connect";
import { notFound } from "./src/middlewares/not-found";
require("dotenv").config();

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasksRouter);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`listen to ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
