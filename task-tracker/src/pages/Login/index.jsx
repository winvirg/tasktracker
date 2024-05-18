// src/Login.js
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css'; // Para estilos adicionais


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/home"><button type="submit" className="login-button">Login</button></Link> {/* ajeitar o botao para validar */}
        <Link to="/cadastro"><button type="submit" className="login-button">Cadastre-se</button></Link>
        <Link to="/esqueciSenha">Esqueci minha senha</Link>
      </form>
    </div>
  );
};
export default Login;
