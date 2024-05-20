import React from 'react';
import { Link } from 'react-router-dom';

const EsqueciSenha = () => {


  return (
    <div className='esqueci-container'>
      <div className='form-recuperar'>
        <form>
          <h2>Recuperar conta</h2>
          <input
          type="email"  
          placeholder='Email cadastrado'
          required
        />
        <button className='btn-enviar'>Enviar</button>
        </form>
      </div >
      <div className="codigo">
        <form >
          <h2>Digite o codigo enviado ao seu email</h2>
          <input
            type="number"
            placeholder='Digite o codigo'
            required
          />
          <button className='btn-enviar'>Enviar</button>
        </form>
      </div>
      <div className="nova-senha">
        <form>
          <h2>Escolha sua nova senha</h2>
          <input
            type="password"
            placeholder='Digite sua nova senha'
            required
          />
          <button className='btn-enviar'>Alterar senha</button>
        </form>
      </div>
    </div>
  )
}

export default EsqueciSenha
