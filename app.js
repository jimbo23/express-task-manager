require("./src/db/connect");
import express from "express";
import { tasksRouter } from "./src/routes/tasksRoute";

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/tasks", tasksRouter);

app.listen(PORT, () => console.log(`listen to ${PORT}`));
