import { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";

import Todo from "../../components/Todo";
import Header from "../../components/Header";
import ModalEdit from "../../components/modalEdit";

import "../../App.css"

function Home() {

  //Usuario
  const [currentUser, setCurrentUser] = useState();
  const [newUser, setNewUser] = useState([]);
  const location = useLocation();
  const { state: {user}} = location;


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
if (user != null){
  return (
    <div className="app">
      <Header key={user.id} user={user}/>
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
} return (
  <div className="app">
    <h1>Voce precisa logar</h1>
    <Link to="/"><button>Login</button></Link>
  </div>
)

}

export default Home;
