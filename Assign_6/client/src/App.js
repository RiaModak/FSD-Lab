import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Function to FETCH and VIEW tasks
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Run fetchTasks once when the app opens
  useEffect(() => {
    fetchTasks();
  }, []);

  // CREATE - Add task and then refresh view
  const addTask = () => {
    if (input.trim() === "") return;
    axios.post('http://localhost:5000/tasks', { name: input }).then(() => {
      setInput(""); // Clear input box
      fetchTasks(); // Refresh the list to see the new task
    });
  };

  // UPDATE - Show a popup to edit and then refresh view
  const editTask = (id, currentName) => {
    const newName = prompt("Update task name:", currentName);
    if (newName && newName.trim() !== "") {
      axios.put(`http://localhost:5000/tasks/${id}`, { name: newName }).then(() => {
        fetchTasks();
      });
    }
  };

  // DELETE - Remove task and then refresh view
  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`).then(() => {
      fetchTasks();
    });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>MERN Task Manager</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text"
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="What needs to be done?"
          style={{ padding: '10px', width: '70%' }}
        />
        <button onClick={addTask} style={{ padding: '10px', cursor: 'pointer' }}>Add Task</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task._id} style={{ 
            background: '#f4f4f4', 
            margin: '10px 0', 
            padding: '10px', 
            display: 'flex', 
            justifyContent: 'space-between',
            borderRadius: '5px'
          }}>
            <span style={{ fontSize: '18px' }}>{task.name}</span>
            <div>
              <button onClick={() => editTask(task._id, task.name)} style={{ marginRight: '5px' }}>Edit</button>
              <button onClick={() => deleteTask(task._id)} style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p>No tasks found. Add one above!</p>}
    </div>
  );
}

export default App;