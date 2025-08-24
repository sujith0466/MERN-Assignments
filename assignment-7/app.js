const express = require("express");
const app = express();
const methodOverride = require("method-override");

let todos = [];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

// Show all todos
app.get("/", (req, res) => {
  res.render("list", { todos });
});

// Add new task
app.post("/add", (req, res) => {
  const { task } = req.body;
  if (task && task.trim()) {
    todos.push({ task, completed: false, editing: false });
  }
  res.redirect("/");
});

// Enable edit mode (just sets flag)
app.get("/edit/:index", (req, res) => {
  const index = parseInt(req.params.index);
  if (!isNaN(index) && todos[index]) {
    todos[index].editing = true;
  }
  res.redirect("/");
});

// Update task content
app.put("/update/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const updatedTask = req.body.updatedTask.trim();
  if (!isNaN(index) && updatedTask) {
    todos[index].task = updatedTask;
    todos[index].editing = false;
  }
  res.redirect("/");
});

// Toggle complete/incomplete
app.patch("/toggle/:index", (req, res) => {
  const idx = parseInt(req.params.index);
  if (!isNaN(idx) && todos[idx]) {
    todos[idx].completed = !todos[idx].completed;
  }
  res.redirect("/");
});

// Delete task
app.delete("/delete/:index", (req, res) => {
  const idx = parseInt(req.params.index);
  if (!isNaN(idx)) {
    todos.splice(idx, 1);
  }
  res.redirect("/");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
