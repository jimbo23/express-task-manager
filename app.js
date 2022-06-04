require("./src/db/connect");
// nodejs: if you require a module and that module doesn't export
// any function, the function will be invoked however, if the
// function is called in the module
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
