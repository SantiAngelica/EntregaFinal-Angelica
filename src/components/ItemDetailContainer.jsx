import { useState } from "react"
import { useParams } from "react-router-dom"
import data from "../assets/products.json"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    const idParams = useParams().id
    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }
    pedirProductos()
        .then((res) => {
            setProductos(res)
        })
    return (
        productos.map(producto => {
            if (producto.id == idParams) {
                return (
                    <div className="container d-flex justify-content-center mt-5">

                        <ItemDetail key={producto.id} producto={producto} />
                    </div>
                )
            }
        })
    )
}
export default ItemDetailContainer