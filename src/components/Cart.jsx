import { useContext, useEffect, useState } from 'react'
import logo from '../assets/x-lg.svg'
import CartBar from './CartBar'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const [carritoLocal, setCarritoLocal] = useState(JSON.parse(localStorage.getItem('carrito')))
    const { borrarItem } = useContext(CartContext)
    useEffect(() => {
        setCarritoLocal(JSON.parse(localStorage.getItem('carrito')))
    }, [carritoLocal])
    return (
        <div className="container d-grid cart">
            <CartBar />
            {carritoLocal.map((producto) => {
                return (
                    <div key={producto.id} className="card-item-carrito mb-4 ">
                        <div className="card-producto-carrito">
                            <figure className="mb-0">
                                <img src={producto.src} alt="" height={100} />
                            </figure>
                            <h2 className="mb-0">{producto.modelo}</h2>
                        </div>
                        <div className="card-precio-carrito ">
                            <div >
                                <p className="mb-0">${producto.precio}</p>
                                <p className="mb-0">x{producto.cantidad}</p>
                            </div>
                            <button type="button" className="btn-close" aria-label="Close" onClick={() => { borrarItem(producto.id) }}></button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Cart