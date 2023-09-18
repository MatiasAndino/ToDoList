import React from 'react';
import { useState } from 'react';

const ToDo = () => {
    const [tareas, setTareas] = useState(['galletas', 'lacoca']);

    // function agregarTarea(tarea) {
    //     // const newTarea = 'tarea numero 2';
    //     setTareas([...tareas, tarea]);
    // }
    // function handleSubmit(event) {
    //     setTareas([...tareas, event.target.value]);
    // }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
        );
    };

    tareas.map(t => console.log(t));

    return <div>
        <h1>To Do List</h1>

        <section>
            <h2>LIST</h2>
            {
                tareas.map(tarea => {
                    return (
                        <div>
                            {tarea}
                        </div>
                    )
                })
            }
        </section>

        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={ToDo.name} onChange={handleChange}/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={ToDo.email} onChange={handleChange}/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={ToDo.message} onChange={handleChange}/>

                <button type="submit">Submit</button>
            </form>
            {/* <form >
                <input type="text" name="" id="" />
                <button onClick={agregarTarea}>Add</button>
                <button onClick={() => agregarTarea('perro cosmico')}>Add</button>
            </form> */}
        </section>
    </div>
};

export default ToDo;