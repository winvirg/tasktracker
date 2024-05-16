import React from "react"
import "./Todo.css"

const Todo = ({ todo, removeTodo }) => {
    
    return(
        <div className="todo">
            <div className="content">
                <p>{todo.text}</p>
                <p className='category'>({todo.category})</p>
            </div>
            <div>
                <button className="complete">Completar</button>
                <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
            </div>
        </div>
)}

export default Todo;