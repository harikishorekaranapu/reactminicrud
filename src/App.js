import React from 'react';
//import logo from './logo.svg';
import './App.css';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import DashboardPage from './containers/DashboardPage';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardPage}/>
          <Route path="/Dashboard" component={DashboardPage}/>
          <Route path="/Login" component={LoginPage}/>
          <Route path="/Register" component={RegisterPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
