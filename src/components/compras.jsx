import { useContext } from "react";
import { CartContext } from "../context/cartcontext";
import { Link } from "react-router-dom";


const Compras = () => {

    // Llamamos  a carrito.jsx

        const {carrito, precioTotal,vaciarCarrito } = useContext(CartContext);

        const handleVaciar = () => {
            vaciarCarrito();
        }

    return(
        <div>
            <h1> Carrito de compras </h1>
            {carrito && carrito.map((prod) => (
                
                <div key={prod.id}> 
                    <h3> {prod.titulo} </h3>
                    <img src={prod.imagen} alt={prod.titulo} />
                    <p> Precio:{prod.precio}</p>
                    <p> Cantidad: {prod.cantidad}</p>
                    <p> Precio total: {prod.precio * prod.cantidad}</p>
                    <br />
                </div>
            ))}

            {
                carrito.length > 0 ?
                <div>

                <h2> Precio total: $ {precioTotal ()} </h2>
                <button onClick={handleVaciar}> Vaciar</button>
                <Link to="/checkout"> Finalizar compra </Link>

                </div> :
                <h2> Carro vacio </h2> 
                
            }
            
            
        </div>
    )

}

export default Compras;
