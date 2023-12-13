import { createContext,useState,useEffect } from "react";


export const CartContext = createContext();
const carritoInicial = [];


export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(() => {
        // Intenta obtener el carrito desde localStorage al cargar la página
        const storedCart = localStorage.getItem("carrito");
        return storedCart ? JSON.parse(storedCart) : carritoInicial;
    });
    
    useEffect(() => {
        // Guarda el carrito en localStorage cada vez que cambie
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const handleAgregar = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    
    const productoAgregado = carrito.find((producto) => producto.id === itemAgregado.id);
    
        if (productoAgregado) {
            productoAgregado.cantidad += cantidad;
            setCarrito([...carrito]);  // Actualizar el estado del carrito
        } else {
            setCarrito([...carrito, itemAgregado]);  // Agregar el nuevo producto al carrito
        }
    

    };

    const cantidadenCarrito = () => {
        return carrito.reduce ((acumulador, prod) => acumulador + prod.cantidad, 0 )
    }

    const precioTotal = () => {
        return carrito.reduce ((acumulador,prod) => acumulador + prod.precio * prod.cantidad, 0 )
    }

    const vaciarCarrito = () => {
        setCarrito ([]);
    }

    return(
        <CartContext.Provider value={ {carrito,handleAgregar,cantidadenCarrito, precioTotal, vaciarCarrito} }>
            {children}
        </CartContext.Provider>
    ) 
}