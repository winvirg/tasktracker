import React, { useEffect, useState } from "react"
import "./Todo.css"
import ModalEdit from "../components/modalEdit";

const Todo = ({ todo, user_id }) => {

    const [open, setOpen] = useState(false);
    const [todoId, setTodoId] = useState(0);

    const handleEdit = (id) => {
        setTodoId(id);
        setOpen(true);
    }

    const removeTodo = async (id) => {
        fetch(`http://localhost:5000/todo/${id}`, {method: 'DELETE'})
        .then(() => (window.location = '/home'))
        .catch((error) => console.log(error))
    }

    {/*const completeTodo = (todo, id) => {
        fetch(`http://localhost:5000/todo/${id}`)
        .then(todo => {
            todo.isCompleted = true;
            return  fetch(`http://localhost:5000/todo/${id}`,{
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(todo)
                    })
        })
        .then(() => (window.location))
        .catch((error) => console.log(error));
    }*/}
    
    return(
        <div className="todo" 
        style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">{todo.category}</p>
            </div>
            <div>
                <button className="complete" onClick={ () => completeTodo(todo, todo.id) }>Completar</button>
                <button className="remove" onClick={ () => removeTodo(todo.id) }>x</button>
                { open ?  <ModalEdit open={open} setOpen={setOpen} id={todoId} nameBtn="Editar"/> : ""}
                <button onClick={() => handleEdit(todo.id)}>Editar tarefa</button>
            </div>
        </div>
)}

export default Todo;