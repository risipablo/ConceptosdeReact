import { useContext,useState } from "react"
import ItemCount from "./itemcount"
import { CartContext } from "../context/cartcontext";


export const ItemDetail = ({item}) => {

    const  {carrito, handleAgregar} = useContext(CartContext);
    console.log(carrito)

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad - 1 )
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad (cantidad + 1 )
    }


    return(
        <div className="container">
            <div className="producto-detalle">
                <img src={item.imagen} alt={item.titulo} />
                <h3 className="titulo"> {item.titulo}</h3>
                <p>{item.description} </p>
                <p> Categoria: {item.categoria}</p>
                <p> ${item.precio}</p>
                <p> Cantidad disponible: {item.stock}</p>
                <ItemCount cantidad={cantidad}
                handleSumar={handleSumar} 
                handleRestar={handleRestar} 
                handleAgregar={() => handleAgregar(item,cantidad)} /> 
        </div>
        </div>
    )
}


// en handleAgregar se debe crear una funcion anonima para pasar los parametros 