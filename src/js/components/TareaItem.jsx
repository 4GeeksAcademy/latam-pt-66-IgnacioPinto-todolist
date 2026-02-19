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

export default TareaItem;