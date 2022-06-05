import mongoose from "mongoose";

export const connectionString =
  "mongodb+srv://kiefersoon:<password>@nodeexpressprojects.br5xz.mongodb.net/EXPRESS-TASK-MANAGER?retryWrites=true&w=majority";

export const connectDB = (url) => {
  return mongoose.connect(url);
};
