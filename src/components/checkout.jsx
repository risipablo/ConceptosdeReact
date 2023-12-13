
import { useContext, useState } from "react";
import { CartContext } from "../context/cartcontext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/database";

const Checkout = () => {

    const [pedidos,setPedidos] = useState ("");

    const {carrito, precioTotal,vaciarCarrito } = useContext(CartContext);

    
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        const pedido = {
            cliente:data,
            producto:carrito,
            total:precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db,"pedidos");

        addDoc(pedidosRef,pedido)
        .then((doc) => {
            setPedidos(doc.id)
            vaciarCarrito;
        })
    }


    if(pedidos){
        return (
            <div>
                <h1> Muchas gracias por tu compra</h1>
                <p> Tu numero de pedido es:{pedidos}</p>
            </div>
        )
    }

    return(

        <>
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                <button className="enviar" type="submit">Enviar</button>

            </form>
        </div>
        </>
    )
}

export default Checkout;