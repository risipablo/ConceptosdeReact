import { useEffect } from "react";
import { useState } from "react"
import { ItemDetail } from "./itemdetail";
import { useParams } from 'react-router-dom';
import {doc,getDoc} from "firebase/firestore";
import { db } from "../firebase/database";

export const ItemDetailContainer = () => {

    const [ item, setItem] = useState (null);
    const id = useParams().id;

    useEffect(() => {

        const docRef = doc(db, "productos" ,id)
        getDoc(docRef)
        .then((resp) => {
            setItem(
                {...resp.data(), id: resp.id}
            )
        })

    },[id])

    return(

        <div>
            {item && <ItemDetail item = {item} />}
        </div>

    )
}



/* useEffect(() => {
        pedirProdutos(Number(id)) //convierte un string a numero
        .then((res) => {
            setItem(res)
        })
    },[id]) Relacionado con el JSON */