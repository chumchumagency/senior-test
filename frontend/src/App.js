import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TaskPage from './pages/TaskPage';
import api from './api/api';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { jwtDecode } from "jwt-decode";

const App = () => {
  const history = useHistory()
  const [token, setToken] = useState(null);

  const login = async (credentials) => {
    const response = await api.login(credentials);
    setToken(response.token);
  };

  useEffect(() => {
    const decodedToken = jwtDecode(token)
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      history.push("/login")
    }
  }, [history])

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
