
import React, { useEffect, useState } from 'react';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config.js'
import Loading from './Loading.jsx';

const FilterList = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const marca = useParams().marca
    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where("marca", "==", marca))
        getDocs(q)
        .then((resp) => {
            setProductos (
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id}
                })
            )
        })
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    },[marca])
    if(loading){
        return( <Loading/> )
    }
    else{
        return(
            <div className="container card-box">
                { <ItemList productos={productos} marca={marca}/> }
            </div>
        )
    }
}
export default FilterList