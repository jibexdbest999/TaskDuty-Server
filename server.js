require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", require("./Routes/taskRoutes"));

console.log("MONGO_URL =", process.env.MONGO_URL);
mongoose
.connect(process.env.MONGO_URL, {
   serverSelectionTimeoutMS: 10000,
})
  .then(() => {
    console.log("MongoDB Connected!!!");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
  