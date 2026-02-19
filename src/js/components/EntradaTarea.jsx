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
            placeholder="¿Que necesitas hacer?"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            onKeyDown={handleKeyDown}
        />
    );
};

export default EntradaTarea;