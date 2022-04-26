import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppProvider from './context/AppProvider';
import Login from './pages/Login/Login';
import Foods from './pages/Foods/Foods';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </AppProvider>
  );
}

export default App;
