const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const app = express();
const http = require("http");
const cors = require("cors");
const UserSchema = require("./models/User");
const port = 8080;
const mongoURL =
  "mongodb+srv://vb345651:vb345651@cluster0.0v13zai.mongodb.net/organick";

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to the server");

    // const newUser = new UserSchema({
    //   name: "Test",
    //   password: "test12344",
    //   isAdmin: true,
    //   isOwner: true,
    // });

    // newUser
    //   .save()
    //   .then(() => {
    //     console.log("Dummy user created successfully");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());
app.get("/", (req, res, next) => {
  res.send("<h1>hello</h1>");
});

app.listen(port, () => {
  console.log(`server is listening on the ${port}`);
});
