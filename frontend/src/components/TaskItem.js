import React, { useState } from 'react';

const TaskItem = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type='submit'>Add Task</button>
    </form>
  );
};

export default TaskItem;
