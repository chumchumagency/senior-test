import { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TaskPage from './pages/TaskPage';
import api from './api/api';

function App() {
  const [token, setToken] = useState(null);

  const login = async (credentials) => {
    const response = await api.login(credentials);
    setToken(response.token);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage login={login} />,
    },
    {
      path: '/login',
      element: <LoginPage login={login} />,
    },
    {
      path: '/tasks',
      element: <TaskPage api={api} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
