import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TaskPage from './pages/TaskPage';
import api from './api/api';

const App = () => {
  const [token, setToken] = useState(null);

  const login = async (credentials) => {
    const response = await api.login(credentials);
    setToken(response.token);
  };

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <LoginPage login={login} />
        </Route>
        <Route path='/tasks'>
          <TaskPage api={api} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
