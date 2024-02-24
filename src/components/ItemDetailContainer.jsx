import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config.js'
import Loading from "./Loading.jsx"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const idParams = useParams().id
    useEffect(() => {
        const productoRef = doc(db, "productos", idParams)
        getDoc(productoRef)
            .then((resp) => {
                setProducto(
                    { ...resp.data(), id: resp.id }
                )
            })
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [idParams])
    return (
        loading ? <Loading /> : <ItemDetail key={producto.id} producto={producto} />
    )
}
export default ItemDetailContainer