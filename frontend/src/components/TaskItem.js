import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

const TaskItem = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState("")

  const priorities = ["Low", "Medium", "Hight"]

  const onSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, priority });
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={priority}
          label="Priority"
          onChange={(event) => setPriority(event.target.value)}
        >
          {priorities.map((pri, index) => {
            return (
              <MenuItem key={index} value={pri}>{pri}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <button type='submit'>Add Task</button>
    </form>
  );
};

export default TaskItem;
