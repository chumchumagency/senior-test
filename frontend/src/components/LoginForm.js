import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, Input, InputAdornment, InputLabel, TextField } from '@mui/material';

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='d-flex justify-content-center'>
        <TextField
          variant='standard'
          className='my-2'
          style={{ minWidth: "300px" }}
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='d-flex justify-content-center'>
        <TextField
          variant='standard'
          className='my-2'
          style={{ minWidth: "300px" }}
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='d-flex justify-content-center'>
        <Button variant="contained" type='submit' className='my-2'>Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
