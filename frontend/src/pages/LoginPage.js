import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ login }) => {
  return (
    <div className='d-flex justify-content-center align-items-center h-100 w-100'>
      <div className='w-50' style={{ backgroundColor: "lightgrey", padding: "20px", borderRadius: 10 }}>
        <h1 className='text-center'>Login</h1>
        <LoginForm login={login} />
      </div>
    </div>
  );
};

export default LoginPage;
