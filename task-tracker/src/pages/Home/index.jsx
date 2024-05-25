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

  useEffect(() => {
    console.log(user);
  }, [user]);

  

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
        {todos.filter(todo => todo.user_id === user.id).map(filteredTodo => (
          <Todo
            key={filteredTodo.id}
            todo={filteredTodo}
            user_id={user.id}
          />
        ))}
        { open ?  <ModalEdit open={open} setOpen={setOpen} user_id={user.id} nameBtn="Criar"/> : ""}
        <button onClick={()=> setOpen(true)}>Criar tarefa</button>
        
      </div>
      
    </div>
  );

}

export default Home;
