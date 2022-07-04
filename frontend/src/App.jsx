import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

function App() {
  return (
    <Switch>
      <Route path="/tasks" component={Tasks} />
      <Route path="/" component={Login} />
    </Switch>
  );
}

export default App;
