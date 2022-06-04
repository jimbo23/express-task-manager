import express from "express";
import { tasksRouter } from "./src/routes/tasksRoute";

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`listen to ${PORT}`));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/tasks", tasksRouter);
