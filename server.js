require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./Routes/authRoutes")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./Routes/authRoutes"));
app.use("/tasks", require("./Routes/taskRoutes"));

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
  