import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.priority}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
