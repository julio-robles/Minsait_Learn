import React from "react";
import { Link } from 'react-router-dom';

export const Home = () => {
  const handleOnClickLogout = async () => {
    localStorage.setItem("isAuthenticated", "false");
    window.location.pathname = "/";    
  };

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
      };
    return (
    <div>
      <h1>Welcome to Game Hub!</h1>

      <Link style={linkStyle} to="/register"><h2>Registro</h2></Link>
      <Link style={linkStyle} to="/login"><h2>Iniciar sesión</h2></Link>
      <Link style={linkStyle} to="/tictactoe"><h2>Tic Tac Toe</h2></Link>
      <Link style={linkStyle} to="/hangman"><h2>Hangman</h2></Link>
      <Link style={linkStyle} to="/sudoku"><h2>Sudoku</h2></Link>

      

      <button onClick={handleOnClickLogout}>Cerrar sesión</button>

    </div>
  );
};