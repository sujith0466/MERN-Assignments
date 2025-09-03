const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/secretsDB";
mongoose.connect(mongoURI);

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password
  });
  newUser.save()
    .then(() => res.render("secrets"))
    .catch(err => console.log(err));
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ email: username })
    .then(foundUser => {
      if (foundUser && foundUser.password === password) {
        res.render("secrets");
      } else {
        res.send("Invalid credentials");
      }
    })
    .catch(err => console.log(err));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});