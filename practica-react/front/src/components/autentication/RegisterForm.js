import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Register } from '../../api/auth';

export const RegisterForm = () => {  

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const {register, handleSubmit} = useForm();

    useEffect(() => {
      setUsername('');
      setEmail('');
      setPassword('');
    }, []);

    const onSubmit = async (evt) => {
      try {
        const data = await Register(evt);
        console.log('¡Registro completado!', JSON.stringify(data));
      } catch (err) {
        console.log(err);
      }
    };

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };

    return (
      <div>
        <h1>Welcome to Game Hub's Login!</h1>    
        <Link style={linkStyle} to="/"><h2>Back to main menu</h2></Link>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">
            <p>Nombre de usuario</p>
            <input
              type="text"
              {...register('username', { required: true })}
              value={username}
              onChange={e => {
                setUsername(e.target.value);
              }}
            />
          </label>

          <label htmlFor="email">
            <p>Email</p>
            <input
              type="text"
              {...register('email', { required: true })}
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <label htmlFor="password">
            <p>Contraseña</p>
            <input
              type="password"
              {...register('password', { required: true })}
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <p></p>
          <button type="submit">Registrar mi cuenta</button>
        </form>
      </div>
    );
}