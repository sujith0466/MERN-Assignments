// app.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();

// ---------- DB ----------
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ helper for flash-like alerts using query params
function withAlert(res, redirectTo, msg, type = 'success') {
  const url = new URL(redirectTo, 'http://dummy'); // safe dummy base
  url.searchParams.set('msg', msg);
  url.searchParams.set('type', type);
  return res.redirect(url.pathname + url.search);
}

// ---------- Model ----------
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    priority: { type: String, enum: ["low", "high", "urgent"], default: "low" },
    completed: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

// ---------- App Setup ----------
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// ---------- Routes ----------
app.get('/', async (req, res) => {
  const { msg, type, edit } = req.query;
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.render('list', { tasks, msg, type, edit });
});

app.post('/tasks', async (req, res) => {
  const { title, priority } = req.body;
  if (!title || !title.trim()) {
    return withAlert(res, '/', 'Task title cannot be empty.', 'error');
  }
  const safePriority = ['low', 'high', 'urgent'].includes(priority) ? priority : 'low';
  await Task.create({ title: title.trim(), priority: safePriority });
  return withAlert(res, '/', 'Task added successfully.');
});

app.patch('/tasks/:id/toggle', async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) return withAlert(res, '/', 'Task not found.', 'error');
  task.completed = !task.completed;
  await task.save();
  return withAlert(res, '/', task.completed ? 'Marked as completed.' : 'Marked as pending.');
});

app.get('/tasks/:id/edit', (req, res) => {
  const { id } = req.params;
  return res.redirect(`/?edit=${id}`);
});

app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { updatedTitle, updatedPriority } = req.body;
  const task = await Task.findById(id);
  if (!task) return withAlert(res, '/', 'Task not found.', 'error');

  if (!updatedTitle || !updatedTitle.trim()) {
    return withAlert(res, `/?edit=${id}`, 'Updated title cannot be empty.', 'error');
  }
  const safePriority = ['low', 'high', 'urgent'].includes(updatedPriority)
    ? updatedPriority
    : task.priority;

  task.title = updatedTitle.trim();
  task.priority = safePriority;
  await task.save();

  return withAlert(res, '/', 'Task updated successfully.');
});

app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  if (!task) return withAlert(res, '/', 'Task not found.', 'error');
  return withAlert(res, '/', 'Task deleted successfully.');
});

// ---------- Server ----------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
