
import { useEffect } from "react"
import { useState } from "react"
import Itemlist from "./itemlist"
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/database";

const ItemlistContainer = () => {

    const [products, setProducts] = useState([]);
    const categoria = useParams().categoria;
    const [titulo] = useState("Productos")

    useEffect (() => {

        const productosRef = collection(db,"productos"); // llama a la base y una referencia

        const q = categoria ? query(productosRef,where("categoria", "==" , categoria)) : productosRef // crea un conjunto de busqueda que deseamos filtrar
        // resive 2 parametros, en where le pasamos las condiciones

        getDocs(q)
            .then((resp) => {

                setProducts (
                    resp.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    })
                )
            })

    },[categoria])



    /* useEffect(() => {
        pedirDatos()
        .then((res) => {
            if(categoria){
                setProducts(res.filter((prod) => prod.categoria === categoria))
                setTitulos(categoria)
            }else{
                setProducts(res)
                setTitulos("Productos")
            }
        })  

    },[categoria])  base adtos del archivo JSON*/


    return(
        <>
        <Itemlist products = {products} titulo={titulo}/>
        </>
    )
}

export default ItemlistContainer;