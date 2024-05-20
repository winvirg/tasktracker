import React from "react"
import "./Todo.css"

const Todo = ({ id, text, category, isCompleted, completeTodo, removeTodo }) => {
    
    return(
        <div className="todo" 
        style={{textDecoration: isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p>{text}</p>
                <p className="category">{category}</p>
            </div>
            <div>
                <button className="complete" onClick={() => completeTodo(id)}>Completar</button>
                <button className="remove" onClick={removeTodo.bind(id)}>x</button>
            </div>
        </div>
)}

export default Todo;