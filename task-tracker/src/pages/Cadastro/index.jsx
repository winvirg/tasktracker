import { useState } from 'react';
import './Cadastro.css'; 
import { Link } from 'react-router-dom';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para registrar o usuário
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="cadastro-container">
      <form onSubmit={handleSubmit} className="cadastro-form">
        <h2>Cadastre-se</h2>
        <input
            type="text"
            placeholder='Digite seu nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        <input
          type="email"
          placeholder='Digite seu melhor e-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder='Escolha sua senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
        <button > <Link to="/">Ja tenho uma conta. Logar</Link></button>
      
      </form>
    </div>
  );
};
export default Cadastro;
