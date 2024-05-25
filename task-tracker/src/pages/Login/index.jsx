import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import usersData from '../../../db.json';

import './Login.css'; 


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = usersData.users.find(u => u.email === email && u.password === password);
    if(user) {
      setCurrentUser(user);
      navigate('/home', { state: {user} })
    } else{
        alert(' Email ou senha incorreto ')
    }
  }
  

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
        <button type="submit" className="login-button">Login</button>
        <Link to="/cadastro"><button type="submit" className="login-button">Cadastre-se</button></Link>
        <Link to="/esqueciSenha">Esqueci minha senha</Link>
      </form>
    </div>
  );
};
export default Login;
