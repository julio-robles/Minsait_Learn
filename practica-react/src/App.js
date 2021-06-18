import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Tictactoe } from './components/Tictactoe';
import { Hangman } from './components/Hangman';
import { Sudoku } from './components/Sudoku';


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
          <Route path="/" exact component={Home} />
          <Route path="/tictactoe" exact component={Tictactoe} />
          <Route path="/hangman" exact component={Hangman} />
          <Route path="/sudoku" exact component={Sudoku} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;