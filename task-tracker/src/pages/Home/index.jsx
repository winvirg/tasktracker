import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link} from "react-router-dom";

import Todo from "../../components/Todo";
import Header from "../../components/Header";
import ModalEdit from "../../components/modalEdit";

import "../../App.css"

function Home() {

  const navigate = useNavigate();

  //Usuario
  const {state} = useLocation()
  const user = state ? state.user : null;


  //Todos
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(
    () =>{
      fetch('http://localhost:5000/todo')
      .then((response) => response.json())
      .then((response) => setTodos(response))
      .catch((error) => console.log(error))
    },[]
  )

  if(!user){
    return(
      <div className="app">
        <h1>Voce precisa fazer Login</h1>
        <Link to='/'><button>Logar</button></Link>
      </div>
    )
  }

  return (
    <div className="app">
      <Header key={user.id} user={user} />
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) =>(
          <Todo
            key={todo.id}
            todo={todo}/>
        ))}
        { open ?  <ModalEdit open={open} setOpen={setOpen} nameBtn="Criar"/> : ""}
        <button onClick={()=> setOpen(true)}>Criar tarefa</button>
        
      </div>
      
    </div>
  );

}

export default Home;
