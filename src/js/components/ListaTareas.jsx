/**
 * Componente: ListaTareas
 * Autor: Ignacio Pinto
 * Descripción: Contenedor que decide si mostrar la lista o el mensaje de vacío.
 */

import TareaItem from "./TareaItem";

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

export default ListaTareas;