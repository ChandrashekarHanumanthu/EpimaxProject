import React, { useState } from 'react';
import './index.css';

const TaskAssignment = ({ assignTask }) => {
  const [selectedUser, setSelectedUser] = useState('');

  const handleAssignTask = () => {
    if (!selectedUser.trim()) return;

    assignTask(selectedUser);
    setSelectedUser('');
  };

  return (
    <div className="assignment-container">
      <h2>Assign Task</h2>
      <div>
        <label>Select User:</label>
        <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="">Select User</option>
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
        </select>
        <button onClick={handleAssignTask} className='btn-assign'>Assign Task</button>
      </div>
    </div>
  );
};

export default TaskAssignment;
