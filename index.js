const express = require("express");
const app = express();
const URL = require("./models/task");
const port = process.env.PORT || 3000;
const userRouter = require("./routes/task");
const { connectDB } = require("./connection");
connectDB("mongodb://127.0.0.1:27017/taskmanager-api");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/task", userRouter);

app.listen(port, () => {
  console.log(`Listining on port ${port}`);
});
