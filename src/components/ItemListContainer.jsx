
import React, { useState } from 'react';

import ItemList from "./ItemList";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config.js'
import Loading from './Loading.jsx';



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const productosRef = collection(db, "productos")
    getDocs(productosRef)
        .then((resp) => {
            setProductos(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            )
        })
    setTimeout(() => {
        setLoading(false)
    }, 1500);
    if(loading){
        return(<Loading/>)
    }
    else{
        return (
            <div className="container card-box">
                {<ItemList productos={productos} />}
            </div>
        )
    }
}
export default ItemListContainer