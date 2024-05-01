import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TaskSummaryPage = ({ taskData }) => {
  return (
    <div>
      <h2>Task Summary</h2>
      <BarChart width={600} height={400} data={taskData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="tasksCompleted" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default TaskSummaryPage;