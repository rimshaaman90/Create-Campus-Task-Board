
import React, { useState } from "react";
import TaskCard from "./component/TaskCard.js";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete Assignment", category: "Academic" },
    { id: 2, title: "Prepare Presentation", category: "Project" },
    { id: 3, title: "Study for Quiz", category: "Study" }
  ]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Academic");

  function addTask(event) {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      category: category
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setCategory("Academic");
  }

  return (
    <div>
      <h1>Campus Task Board</h1>

      <h2>Add a New Task</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Academic">Academic</option>
          <option value="Project">Project</option>
          <option value="Study">Study</option>
          <option value="Personal">Personal</option>
        </select>

        <button type="submit">Add Task</button>
      </form>

      <h2>My Tasks ({tasks.length})</h2>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default App;
