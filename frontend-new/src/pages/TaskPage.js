import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskItem from '../components/TaskItem';

const TaskPage = ({ api }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await api.getTasks();
      setTasks(response);
    };
    fetchTasks();
  }, [api]);

  const addTask = async (task) => {
    const newTask = await api.createTask(task);
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <TaskItem addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskPage;
