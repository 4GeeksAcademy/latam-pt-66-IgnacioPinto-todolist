import React, { useState } from "react";
// Asegúrate de importar Bootstrap en tu index.js o App.js principal
// import 'bootstrap/dist/css/bootstrap.min.css';

// App.js
import { Contador, EntradaTarea, ListaTareas, Titulo } from "./index.js";

/**
 * Componente Principal: Home
 * Autor: Ignacio Pinto
 * Descripción: Componente contenedor que maneja la lógica y el estado.
 */
const Home = () => {
    // Estado para almacenar la lista de tareas
    const [tareas, setTareas] = useState([]);
    
    // Estado para el input controlado
    const [inputValue, setInputValue] = useState("");

    // Función para agregar una tarea
    const agregarTarea = () => {
        if (inputValue.trim() === "") return; // No agregar vacíos

        const nueva = {
            id: Date.now(), // Usamos timestamp como ID único
            label: inputValue
        };

        // Creamos un nuevo array con la tarea nueva + las anteriores
        setTareas([...tareas, nueva]);
        setInputValue(""); // Limpiamos el input
    };

    // Función para eliminar una tarea (filtrando por ID)
    const eliminarTarea = (id) => {
        const tareasFiltradas = tareas.filter((t) => t.id !== id);
        setTareas(tareasFiltradas);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto mt-5">
                    
                    {/* Componente Título */}
                    <Titulo />

                    <div>
                    {tareas.length > 0 && (
                        <div className="text-center"> 
                            <h2 className="py-4">Tienes {tareas.length} {tareas.length == 1 ? "tarea" : "tareas"} pendientes</h2>

                            <button 
                            
                            type="button" 
                            className="btn btn-danger btn-lg" 
                            onClick={() => {
                                setTareas([])
                                alert('Todas las tareas fueron eliminadas')
                            }}>Eliminar Todo</button>

                        </div>
                        )}    
                    </div>

                    <div className="todo-wrapper shadow-lg">
                        
                        {/* Componente Input */}
                        <EntradaTarea 
                            nuevaTarea={inputValue}
                            setNuevaTarea={setInputValue}
                            agregarTarea={agregarTarea}
                        />

                        {/* Componente Lista */}
                        <ListaTareas 
                            lista={tareas} 
                            eliminarTarea={eliminarTarea} 
                        />

                        {/* Componente Footer/Contador */}
                        <Contador cantidad={tareas.length} />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;