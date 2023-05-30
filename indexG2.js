require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const accountRoutes = require("./routes/AccountsRoutes");
const postRoutes = require("./routes/PostRoutes");

//express app
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/posts", postRoutes);
app.use("/api/accounts", accountRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Database live and running on port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
