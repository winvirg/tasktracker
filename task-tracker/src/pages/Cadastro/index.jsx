import { useState, useEffect } from 'react';
import './Cadastro.css'; 
import { Link } from 'react-router-dom';

const Cadastro = (props) => {
  
  const [user, setUser] = useState({
    id: props.id,
    nome: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    fetch(`http://localhost:5000/users/`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((response) => setUsers(response))
    .catch(error => console.log(error));
},[])

  const handleChange = (e) => {
    const { name, value} = e.target;

    setUser({...user, [name]:value});
}

  const handleCreate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/users/?email=${user.email}`)
    .then((response) => response.json())
    .then((users) => {
      if(users.length > 0){
        alert("Email ja cadastrado")
      } else {
          fetch(`http://localhost:5000/users/`,{
            method: "POST",
            Headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
            })
          .then(() => (window.location = '/'))
          .catch((error) => console.log(error))
          };
    })
  }



    

  return (
    <div className="cadastro-container">
      <form onSubmit={handleCreate} className="cadastro-form">
        <h2>Cadastre-se</h2>
        <input
            type="text"
            placeholder='Digite seu nome'
            name="nome"
            value={user.nome}
            onChange={handleChange}
            required
          />
        <input
          type="email"
          placeholder='Digite seu melhor e-mail'
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder='Escolha sua senha'
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
        <button > <Link to="/">Ja tenho uma conta. Logar</Link></button>
      
      </form>
    </div>
  );
};
export default Cadastro;
