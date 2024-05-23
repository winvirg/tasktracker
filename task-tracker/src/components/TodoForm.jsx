import { useEffect, useState } from 'react'
import "./TodoForm.css"

const TodoForm = () => {

  return <div className='todo-form'>
    <h2>Criar tarefa</h2>
    <form>
        <input type="text" 
        placeholder='Digite o título'
        name="text"
        id="idText"
        value={todo.text}
        />
        <select >
            <option value="">Selecione uma categoria</option>
            <option value="trabalho">Trabalho</option>
            <option value="pessoal">Pessoal</option>
            <option value="estudos">Estudos</option>
        </select>
        <button type='submit'>Criar tarefa</button>
    </form>
  </div>
}

export default TodoForm