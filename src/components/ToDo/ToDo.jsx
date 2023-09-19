import React from 'react';
import { useState } from 'react';

const ToDo = () => {
    const [tareas, setTareas] = useState([{tarea:'conejos',editable:false}, {tarea:'correr en circulos', editable:false}]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setNuevaTarea(value);
    };
    
    const handleChangeEdit = (event, index) => {
        const { value } = event.target;
        const t = [...tareas];
        t[index].tarea = value;
        setTareas(t);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setTareas([...tareas, {tarea:nuevaTarea, editable:false}]);
        setNuevaTarea('');
    };

    function editarTarea(index) {
        const t = [...tareas];
        t[index].editable = true;
        setTareas(t);
    }

    function eliminarTarea(index) {
        const t = [...tareas.slice(0,index), ...tareas.slice(index + 1, tareas.length)];
        setTareas(t);
    }

    function guardarCambios(index) {
        const t = [...tareas];
        t[index].editable = false;
        setTareas(t);
    }

    return <div>
        <h1>To Do List</h1>

        <section>
            <h2>LIST</h2>
            {
                tareas.map((tarea, index) => {
                    return (
                        <ul>
                        <div style={{
                            display: 'flex',
                            border: '1px solid ',
                            width: '400px',
                            padding: '5px'
                            }}>
                            {!tarea.editable ?
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '5px',
                                    width: '400px',
                                }}>
                                    <input type="checkbox" />
                                    <li>{tarea.tarea}</li>
                                    <button onClick={() => editarTarea(index)}>EDITAR</button>
                                </div>
                            :
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '5px',
                                    width: '400px'

                                }}>
                                    <input value={tarea.tarea} onChange={(event) => handleChangeEdit(event, index)} required/>
                                    <button onClick={() => guardarCambios(index)}>GUARDAR</button>
                                </div>    
                            }
                            <button onClick={() => eliminarTarea(index)} style={{
                                margin:'9px',
                                flexDirection:'column'
                            }}>ELIMINAR</button>
                        </div>
                        </ul>
                    )
                })
                
            }
        </section>

        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nueva Tarea: </label>
                <input type="text" id="tarea" name="tarea" value={nuevaTarea} onChange={handleChange} required/>

                <button type="submit">AGREGAR TAREA</button>
            </form>
        </section>
    </div>
};

export default ToDo;