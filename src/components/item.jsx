import { Link } from "react-router-dom";


const Item = ( {products} ) => {

    return(
        <div className="producto">
            <img src={products.imagen} /> 
            <div className="detalle">
                <h4>{products.titulo}</h4>
                <p>Precio: ${products.precio}</p>
                <p>Categoria:{products.categoria}</p>
                <Link className="ver-mas" to={`/item/${products.id}`}> Ver más </Link>
            </div>
        </div>
    )
}

export default Item;