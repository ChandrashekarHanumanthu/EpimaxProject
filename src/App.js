import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskAssignment from './components/TaskAssignment';
import TaskStatusUpdates from './components/TaskStatusUpdates';
import TaskSummaryPage from './components/TaskSummaryPage';

import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    updateTaskData([...tasks, newTask]);
  };

  const assignTask = (user) => {

    const updatedTasks = tasks.map(task => {
      if (task.id === user) {
        return { ...task, assignee: user };
      }
      return task;
    });
    setTasks(updatedTasks);
    updateTaskData(updatedTasks);
  };

  const updateTaskStatus = (taskId, status) => {
    // Update the status of the task with the given taskId
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
    updateTaskData(updatedTasks);
  };

  const updateTaskData = (newTasks) => {
    // Calculate task metrics and update taskData state
    const completedTasks = newTasks.filter(task => task.status === 'completed').length;
    const pendingTasks = newTasks.length - completedTasks;

    setTaskData([
      { name: 'Completed', tasksCompleted: completedTasks },
      { name: 'Pending', tasksCompleted: pendingTasks }
    ]);
  };

  return (
    <div className="app">
      <TaskForm addTask={addTask} />
      <TaskAssignment assignTask={assignTask} />
      <TaskStatusUpdates updateStatus={updateTaskStatus} />
      <TaskSummaryPage taskData={taskData} />
    </div>
  );
};

export default App;
