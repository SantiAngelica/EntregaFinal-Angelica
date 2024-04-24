import { useContext, useState } from "react"
import { CartContext, CartProvider } from "../context/CartContext"

const AgregarItem = ({producto}) => {
    const { agregarAlCarrito } = useContext(CartContext)
    const [contador, setContador] = useState(1)
    const restarContador = () => {
        setContador(contador > 1 ? contador - 1 : contador)
    }
    const sumarContador = () => {
        setContador(contador < 3 ? contador + 1 : contador)
    }
    return (
        <div className="box-contador d-flex row row-gap-3">
            <div className="contador1">
                <button onClick={restarContador} className="signos">-</button>
                <span className="cuenta">{contador}</span>
                <button onClick={sumarContador}  className="signos">+</button>
            </div>
            <div className="contador2">
                <button className="px-2" onClick={() => {agregarAlCarrito(producto, contador)}}>Agregrar al carrito</button>
            </div>

        </div>
    )
}

export default AgregarItem