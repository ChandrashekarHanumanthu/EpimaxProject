import React, { useState } from 'react';
import './index.css';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignee, setAssignee] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!taskName.trim() || !description.trim() || !dueDate.trim() || !assignee.trim()) {
      setError('Please fill out all fields.');
      return;
    }

    addTask({ taskName, description, dueDate, assignee });

    setTaskName('');
    setDescription('');
    setDueDate('');
    setAssignee('');
    setError('');
  };

  return (
    <div className="form-container">
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Task Name:</label>
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea rows="10" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Assignee:</label>
          <select value={assignee} onChange={(e) => setAssignee(e.target.value)}>
            <option value="">Select Assignee</option>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
            <option value="team1">Team 1</option>
            <option value="team2">Team 2</option>
          </select>
        </div>
        <button type="submit">Create Task</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default TaskForm;
