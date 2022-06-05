import express from "express";
import { tasksRouter } from "./src/routes/tasksRoute";
import { connectDB } from "./src/db/connect";
require("dotenv").config();

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/tasks", tasksRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`listen to ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
