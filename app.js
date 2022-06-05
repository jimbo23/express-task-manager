import express from "express";
import { tasksRouter } from "./src/routes/tasksRoute";
import { connectDB, connectionString } from "./src/db/connect";

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
    await connectDB(connectionString);
    app.listen(PORT, () => console.log(`listen to ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
