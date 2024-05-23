import { useState, useEffect } from "react";

import Todo from "../../components/Todo";
import TodoForm from "../../components/TodoForm";
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import Header from "../../components/Header";
import AdicionarTodo from "../../components/AddTodo";


import { Link } from 'react-router-dom';

import "../../App.css"

function Home() {
  const [todos, setTodos] = useState([]);
  const [openAdd, setOpenAdd] = useState(0);

  useEffect(
    () =>{
      fetch('http://localhost:5000/todo')
      .then((response) => response.json())
      .then((response) => setTodos(response))
      .catch((error) => console.log(error))
    },[]
  )

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [sort, setSort] = useState("Asc");

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
            todo={todo}/>
        ))}
        { openAdd ?  <AdicionarTodo todo={todos}/> : ""}
        
      </div>
      
    </div>
  );
}

export default Home;
