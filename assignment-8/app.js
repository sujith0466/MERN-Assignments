const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");
const tryschema = new mongoose.Schema({
  name: String,
  completed: {
    type: Boolean,
    default: false,
  },
});
const item = mongoose.model("task", tryschema);
const todo = new item({
  name: "Create some photos",
  completed: false,
});
const todo2 = new item({
  name: "Make a video",
  completed: false,
});
const todo3 = new item({
  name: "Go to the movie",
  completed: false,
});

//todo.save();
//todo2.save();
//todo3.save();
app.get("/", async function (req, res) {
  try {
    const founditems = await item.find({});
    let itemsWithEdit = founditems.map((doc) => {
      let obj = doc.toObject();
      obj.editing = req.query.editId && req.query.editId == doc._id.toString();
      return obj;
    });
    res.render("list", { newlistitems: itemsWithEdit });
  } catch (err) {
    console.log(err);
    res.status(500).send("Database error");
  }
});
app.get("/edit/:id", async function (req, res) {
  res.redirect("/?editId=" + req.params.id);
});

app.put("/update/:id", async function (req, res) {
  try {
    await item.findByIdAndUpdate(req.params.id, { name: req.body.updatedTask });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating task");
  }
});

app.delete("/delete/:id", async function (req, res) {
  try {
    await item.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting task");
  }
});
app.post("/", function (req, res) {
  const itemname = req.body.task;
  const todo4 = new item({
    name: itemname,
    completed: false,
  });
  todo4.save();
  res.redirect("/");
});

app.post("/complete/:id", async function (req, res) {
  try {
    const task = await item.findById(req.params.id);
    if (task) {
      task.completed = !task.completed;
      await task.save();
    }
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating task");
  }
});

app.listen(8000, function () {
  console.log("Server started");
});
