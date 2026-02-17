import React, { useState } from "react";
// Asegúrate de importar Bootstrap en tu index.js o App.js principal
// import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Componente: Titulo
 * Autor: Ignacio Pinto
 * Descripción: Muestra el título principal "todos".
 */
const Titulo = () => {
    return <h1 className="titulo">todos APP by Ignacio</h1>;
};

/**
 * Componente: EntradaTarea
 * Autor: Ignacio Pinto
 * Descripción: Input controlado para escribir nuevas tareas.
 */
const EntradaTarea = ({ nuevaTarea, setNuevaTarea, agregarTarea }) => {
    
    // Manejador para detectar la tecla Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            agregarTarea();
        }
    };

    return (
        <input
            type="text"
            className="input-tarea"
            placeholder="What needs to be done?"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            onKeyDown={handleKeyDown}
        />
    );
};

/**
 * Componente: TareaItem
 * Autor: Ignacio Pinto
 * Descripción: Renderiza una tarea individual y el botón de eliminar.
 */
const TareaItem = ({ tarea, eliminarTarea }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {tarea.label}
            <span 
                className="btn-delete" 
                onClick={() => eliminarTarea(tarea.id)}
            >
                ❌
            </span>
        </li>
    );
};

/**
 * Componente: ListaTareas
 * Autor: Ignacio Pinto
 * Descripción: Contenedor que decide si mostrar la lista o el mensaje de vacío.
 */
const ListaTareas = ({ lista, eliminarTarea }) => {
    if (lista.length === 0) {
        return (
            <div className="p-4 text-muted fs-4">
                No tasks, add a task
            </div>
        );
    }

    return (
        <ul className="list-group list-group-flush text-start">
            {lista.map((tarea) => (
                <TareaItem 
                    key={tarea.id} 
                    tarea={tarea} 
                    eliminarTarea={eliminarTarea} 
                />
            ))}
        </ul>
    );
};

/**
 * Componente: Contador
 * Autor: Ignacio Pinto
 * Descripción: Muestra cuántas tareas quedan y genera el efecto visual de papel.
 */
const Contador = ({ cantidad }) => {
    return (
        <div className="footer-todos d-flex justify-content-start align-items-center">
            <small className="text-muted">
                {cantidad} {cantidad === 1 ? 'item' : 'items'} left
            </small>
        </div>
    );
};

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