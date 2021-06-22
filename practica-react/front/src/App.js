import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Tictactoe } from './components/Tictactoe';
import { Hangman } from './components/Hangman';
import { Sudoku } from './components/Sudoku';
import { RegisterForm } from './components/autentication/RegisterForm';
import { LoginForm } from './components/autentication/LoginForm';
import { SecureRoute, NoUserRoute } from './components/autentication/SecureRoute';

import logo from './logo.svg';
import './App.css';




const App = () => {

  const [user, setUser] = useState(null);

  const handleInitUser = (userData) => {
   setUser(userData);
  };

  const hasUser = !!user;

  return (
    <Router>
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/register" exact component={RegisterForm}/>
          <Route path="/login" exact component={LoginForm}/>
          <SecureRoute hasUser={hasUser} path="/tictactoe" exact component={<Tictactoe handleInitUser={handleInitUser}/>}/>
          <SecureRoute hasUser={hasUser} path="/hangman"  exact component={<Hangman handleInitUser={handleInitUser}/>}/>
          <SecureRoute hasUser={hasUser} path="/sudoku" exact component={<Sudoku handleInitUser={handleInitUser}/>}/>
        </Switch>
      </div>
    </Router>
  );
};
export default App;