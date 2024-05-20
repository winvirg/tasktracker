import { useState, useEffect } from "react";

import Todo from "../../components/Todo";
import TodoForm from "../../components/TodoForm";
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import Header from "../../components/Header";

import { Link } from 'react-router-dom';

import "../../App.css"

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(
    () =>{
      fetch('http://localhost:5000/todo')
      .then((resp) => resp.json())
      .then((resp) => setTodos(resp))
      .catch((error) => console.log(error))
    },[]
  )

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    
    
  };

  const removeTodo = (id) => {
    fetch('http://localhost:5000/todo/${id}', {method: 'DELETE'})
    .then(() => (window.location))
    .catch((error) => console.log(error))
  }
  

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <Header />
      <h1>Lista de tarefas</h1>
      {/*<Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>*/}
      <div className="todo-list">
        {/*{todos
        .filter((todo) => filter === "All" 
        ? true 
        : filter === "Completed" 
        ? todo.isCompleted
        : !todo.isCompleted)
        .filter((todo) => 
        todo.text.toLowerCase().includes(search.toLocaleLowerCase()))
        .sort((a, b) => sort==="Asc" 
        ? a.text.localeCompare(b.text) 
        : b.text.localeCompare(a.text))
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}*/}
        
        {todos.map((todo) =>(
          <Todo
            key={todo.id}
            text={todo.text}
            category={todo.category}
            isCompleted={todo.isCompleted}
            removeTodo={removeTodo}
            completeTodo={completeTodo}/>
        ))}
      </div>
      {/*<TodoForm addTodo={addTodo}/>*/}
    </div>
  );
}

export default Home;
