const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(cookieParser());

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/secretsdb";
mongoose.connect(mongoURI);

const userSchema = new mongoose.Schema({
  name: String,
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

const secretSchema = new mongoose.Schema({
  content: String,
  userId: mongoose.Schema.Types.ObjectId
});

const Secret = mongoose.model("Secret", secretSchema);

app.get("/submit", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.redirect("/login");
  try {
    jwt.verify(token, "secret");
    res.render("submit");
  } catch {
    res.redirect("/login");
  }
});

app.post("/submit", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.redirect("/login");
  try {
    const decoded = jwt.verify(token, "secret");
    const newSecret = new Secret({
      content: req.body.secret,
      userId: decoded.id
    });
    await newSecret.save();
    res.redirect("/secrets");
  } catch {
    res.redirect("/login");
  }
});

app.get("/secrets", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.redirect("/login");
  try {
    const decoded = jwt.verify(token, "secret");
    const user = await User.findById(decoded.id);
    const secrets = await Secret.find();
    res.render("secrets", { user, secrets });
  } catch {
    res.redirect("/login");
  }
});


app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.redirect("/login");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/secrets");
  } else {
    res.redirect("/login");
  }
});


app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

app.listen(8000, () => {
  console.log("server started");
});
