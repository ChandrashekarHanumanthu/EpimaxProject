import React from 'react';
import './index.css';

const TaskStatusUpdates = ({ taskId, updateStatus }) => {
  const handleUpdateStatus = (status) => {
    updateStatus(taskId, status);
  };

  return (
    <div className="status-container">
      <h2>Update Task Status</h2>
      <div>
        <button onClick={() => handleUpdateStatus('started')}>Start Task</button>
        <button onClick={() => handleUpdateStatus('completed')}>Complete Task</button>
      </div>
    </div>
  );
};

export default TaskStatusUpdates;
