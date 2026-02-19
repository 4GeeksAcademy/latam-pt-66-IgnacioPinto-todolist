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

export default Contador;