import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {FiCheck} from 'react-icons/fi';
export const ProductSuccess = () => {
    const {id} = useParams();

    return (
        <section className ="success-page">
            <div className="success-icon">FiCheck</div>

            <h2>Producto cargado con éxito</h2>
            <p>ID de producto: {id}</p>
            <p>Puede cargar otro haciendo click en el botón.</p>

            <Link className="btn bg-primary primary" to="/admin" replace>Agregar otro producto</Link>
        </section>
    );
};