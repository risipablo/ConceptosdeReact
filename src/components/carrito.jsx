
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartcontext"

export const CarriTo = () => {

    const {cantidadenCarrito} = useContext(CartContext)

    return(
        <div>
            <Link className="menu-link" to="/carrito"> 
            Carrito 
            <span> {cantidadenCarrito()} </span>
            </Link>
        </div>
    )
}