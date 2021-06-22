import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

import { login } from '../../api/auth';

export const LoginForm = () => {  
    
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const {register, handleSubmit} = useForm();

    useEffect(() => {
        setEmail('');
        setPassword('');
    }, []);


  const onSubmit = async (e) => {
    try {
      const data = await login(e);
      console.log('Login completado!', data);
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
                <label htmlFor="email">
                <p>Email</p>
                <input
                    type="text"
                    {...register('email', { required: true })}
                    value={email}
                    onChange={e => {setEmail(e.target.value)}}
                />
                </label>

                <label htmlFor="password">
                <p>Contraseña</p>
                <input
                    type="password"
                    {...register('password', { required: true })}
                    value={password}
                    onChange={e => {setPassword(e.target.value)}}
                />
                </label>
                <p></p>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
}