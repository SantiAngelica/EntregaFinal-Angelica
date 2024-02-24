import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartCounter = () => {
    const { cantidadItems } = useContext(CartContext)
    return(
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cantidadItems()}
        </span>
    )
}
export default CartCounter