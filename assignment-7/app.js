const express = require("express");
const app = express();
const methodOverride = require("method-override");

let todos = [];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("list", { todos });
});

app.post("/add", (req, res) => {
  const { task } = req.body;
  if (task && task.trim()) {
    todos.push({ task, completed: false });
  }
  res.redirect("/");
});

app.post("/toggle/:index", (req, res) => {
  const idx = parseInt(req.params.index);
  if (!isNaN(idx) && todos[idx]) {
    todos[idx].completed = !todos[idx].completed;
  }
  res.redirect("/");
});

app.delete("/delete/:index", (req, res) => {
  const idx = parseInt(req.params.index);
  if (!isNaN(idx)) {
    todos.splice(idx, 1);
  }
  res.redirect("/");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
