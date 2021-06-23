import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Tictactoe } from './components/Tictactoe';
import { Hangman } from './components/Hangman';
import { Sudoku } from './components/Sudoku';
import { RegisterForm } from './components/autentication/RegisterForm';
import { LoginForm } from './components/autentication/LoginForm';
import SecureRoute from './components/autentication/SecureRoute';

import logo from './logo.svg';
import './App.css';




const App = () => {
  return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <BrowserRouter>
            <Route path="/" component={Home} />
            <Route exact path="/register" component={RegisterForm}/>
            <Route exact path="/login" component={LoginForm}/>
            <SecureRoute exact path="/tictactoe" component={Tictactoe}/>
            <SecureRoute exact path="/hangman" component={Hangman}/>
            <SecureRoute exact path="/sudoku" component={Sudoku}/>
        </BrowserRouter>
      </div>
  );
};
export default App;