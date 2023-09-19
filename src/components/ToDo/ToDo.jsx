import React from 'react';
import { useState } from 'react';

const ToDo = () => {
    const [tareas, setTareas] = useState(['galletas', 'lacoca']);
    const [nuevaTarea, setNuevaTarea] = useState('');

    // function agregarTarea(tarea) {
    //     // const newTarea = 'tarea numero 2';
    //     setTareas([...tareas, tarea]);
    // }
    // function handleSubmit(event) {
    //     setTareas([...tareas, event.target.value]);
    // }

    const handleChange = (event) => {
        const { value } = event.target;
        setNuevaTarea(value);
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setTareas([...tareas, nuevaTarea]);
    };

    function editarTarea(index) {
        const t = [...tareas];
        setNuevaTarea(t[index]);
    }

    function eliminarTarea(index) {
        const t = [...tareas.slice(0,index), ...tareas.slice(index + 1, tareas.length)];
        setTareas(t);
    }

    return <div>
        <h1>To Do List</h1>

        <section>
            <h2>LIST</h2>
            <ul>
            {
                tareas.map((tarea, index) => {
                    return (
                        <div>
                            <li>{tarea}</li><button onClick={() => editarTarea(index)}>EDITAR</button>
                            <button onClick={() => eliminarTarea(index)}>ELIMINAR</button>
                            <hr></hr>
                        </div>
                    )
                })
                
            }
            </ul>
        </section>

        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nueva Tarea: </label>
                <input type="text" id="tarea" name="tarea" value={nuevaTarea} onChange={handleChange}/>

                <button type="submit">Submit</button>
            </form>
        </section>
    </div>
};

export default ToDo;