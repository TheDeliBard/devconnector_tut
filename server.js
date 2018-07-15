const express = require("express");
const mongoose = require("mongoose");

// get routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// db config
const db = require("./config/keys").mongoURI;
//conenct to mongodb through mongoose
// using promise syntax
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello!"));

// if using heroku, the first one. other is local port

// use routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
