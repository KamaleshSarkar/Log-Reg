const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());
const appRoute = require("./routes/App.Routes");
app.use("/api", appRoute);

const port = process.env.PORT || 2016;



mongoose
  .connect(process.env.dbDriver, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port, () => {
      console.log("Server Running Successfully....!");
      console.log(`@http://localhost:${port}/api`);
    });
  })
  .catch((Error) => {
    console.log("Error");
  });
