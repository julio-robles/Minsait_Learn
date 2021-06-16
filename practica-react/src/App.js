import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Tictactoe } from './components/Tictactoe';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Switch>
          <Route path="/tictactoe" exact component={Tictactoe} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;