const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// server.js
const dbURI = "mongodb+srv://riamodak_db_user:nFzoB5yn1KCpFCQX@cluster0.quot6jt.mongodb.net/?appName=Cluster0";

mongoose.connect(dbURI)
    .then(() => console.log("Cloud MongoDB Connected!"))
    .catch(err => console.log("Connection Error:", err));
// 2. Define Task Schema
const TaskSchema = new mongoose.Schema({ name: String });
const Task = mongoose.model('Task', TaskSchema);

// 3. CRUD Routes
// READ - Get all tasks
app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// CREATE - Add a new task
app.post('/tasks', async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.json(newTask);
});

// UPDATE - Edit an existing task
app.put('/tasks/:id', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
});

// DELETE - Remove a task
app.delete('/tasks/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task Deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));