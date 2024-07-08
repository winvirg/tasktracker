import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './esqueciSenha.css'
import usersData from '../../../db.json';

const EsqueciSenha = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState();
  const [passwordChanger, setPasswordChanger] = useState();

  const [user, setUser] = useState({
    id: "",
    nome: "",
    email: "",
    password: ""
  });

  const handleCheckEmail = (e) => {
  e.preventDefault();
  const user = usersData.users.find(u => u.email === email)
  if (user) {
    setUser(user);
    handleVisibilityChange();
  } else {
      alert("Email não cadastrado")
    }
  }

  const handleChangePassword = (e) => {
    e.preventDefault();
    if(user.password === passwordChanger) {
      alert("Senha já utilizada")
    }else {
      fetch(`http://localhost:5000/users/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({...user,
            password: passwordChanger})
          })
        
        .then(() => (alert("Senha alterada com sucesso"), window.location = '/'))
        .catch((error) => console.log(error))
    }
  } 

  const handleVisibilityChange =() => {
    setIsVisible(true);
  }

  return (
    <div className='esqueci-container'>
      <div className='form-recuperar'>
        <form onSubmit={handleCheckEmail}>
          <h2>Recuperar conta</h2>
          <input
          value={email}
          type="email"  
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email cadastrado'
          required
        />
        <button type="submit">Enviar</button>
        </form>
      </div >

      {/*<div className="codigo">
        <form >
          <h2>Digite o codigo enviado ao seu email</h2>
          <input
            type="number"
            placeholder='Digite o codigo'
            required
          />
          <button className='btn-enviar'>Enviar</button>
        </form>
      </div>*/}
        {console.log(user.id)}
      {isVisible && (
        <div className="nova-senha">
          <form onSubmit={handleChangePassword}>
            <h2>Escolha sua nova senha</h2>
            <input
              name="password"
              value={passwordChanger}
              type="password"
              onChange={(e) => setPasswordChanger(e.target.value) }
              placeholder="Digite sua nova senha"
              required
            />
            <button type='submit'>Alterar senha</button>
          </form>
        </div>
      )}
      
    </div>
  )
}

export default EsqueciSenha
