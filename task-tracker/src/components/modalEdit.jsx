import { useEffect, useState } from 'react';
import styles from './ModalEdit.module.css';

export default function ModalEdit(props) {

    const id = props.id;

    let metodo = id ? "PUT" : "POST";

    const [uniqueTodo, setUniqueTodo] = useState({
        id: props.id,
        text: "",
        category: "",
        user_id: user_id,
        isCompleted: false
    });

    useEffect(() => {
        fetch(`http://localhost:5000/todo/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((response) => setUniqueTodo(response))
        .catch(error => console.log(error));
    },[id])

    const handleChange = (e) => {
        const { name, value} = e.target;

        setUniqueTodo({...uniqueTodo, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/todo/${ id ? id: ""}`,{
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uniqueTodo)
        })
        .then(() => (window.location = '/home'))
        .catch((error) => console.log(error));
        props.setOpen(0)
    };

    useEffect(() =>{
        console.log(user_id)
      })

    if(props.open[0] != 0){
        return(
            <div className={styles.container}>
                <h1>Edite sua tarefa</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="idText">Texto da tarefa</label>
                        <input type="text"
                        name="text"
                        id="idText"
                        value= {uniqueTodo.text}
                        onChange={handleChange}
                        />
                        <label htmlFor="idCategory"> Categoria </label>
                        <select 
                        id="idCategory"
                        name="category"
                        onChange={handleChange}
                        >
                            <option>{uniqueTodo.category}</option>
                            <option value="Trabalho">Trabalho</option>
                            <option value="Pessoal">Pessoal</option>
                            <option value="Estudos">Estudos</option>
                        </select>
                        <button >{props.nameBtn}</button>
                        <button onClick={() => props.setOpen(0)}>Cancelar</button>
                    </form>
                </div>

            </div>
        )
    }
}
