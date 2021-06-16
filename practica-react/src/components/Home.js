import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
      };
    return (
    <div>
      <h1>Welcome to Game Hub!</h1>

      <Link style={linkStyle} to="/tictactoe"><h2>Tic Tac Toe</h2></Link>
    </div>
  );
};