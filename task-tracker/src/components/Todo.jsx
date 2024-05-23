import React from "react"
import "./Todo.css"

const Todo = ({ todo }) => {

    const removeTodo = async (id) => {
        fetch(`http://localhost:5000/todo/${id}`, {method: 'DELETE'})
        .then(() => (window.location = '/home'))
        .catch((error) => console.log(error))
    }

    const completeTodo = (id) => {
        const newTodos = [...todo]
        newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
        setTodos(newTodos);
      }
    
    return(
        <div className="todo" 
        style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">{todo.category}</p>
            </div>
            <div>
                <button className="complete" onClick={ () => completeTodo(todo.id) }>Completar</button>
                <button className="remove" onClick={ () => removeTodo(todo.id) }>x</button>
            </div>
        </div>
)}

export default Todo;