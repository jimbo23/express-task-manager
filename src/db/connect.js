import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://kiefersoon:<password>@nodeexpressprojects.br5xz.mongodb.net/EXPRESS-TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("CONNECTED TO THE DB"))
  .catch((err) => console.log(err));
