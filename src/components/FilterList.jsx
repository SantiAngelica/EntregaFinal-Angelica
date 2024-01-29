import data from "../assets/products.json"
import React, { useState } from 'react';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const FilterList = () => {
    const [productos, setProductos] = useState([])
    const marca = useParams().marca
    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }
    pedirProductos()
        .then((res) => {
            setProductos(res)
        })
    return(
        <div className="container card-box">
            { <ItemList productos={productos} marca={marca}/> }
        </div>
    )
}
export default FilterList