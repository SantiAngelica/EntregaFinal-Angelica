import { useContext } from 'react';
import trash from '../assets/trash.svg'
import check from '../assets/check.svg'
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";

const CartBar = () => {
  const { borrarCarrito, precioTotal } = useContext(CartContext)
  const alerta = () => {
    if (precioTotal()) {
      Swal.fire({
        title: "Espera!",
        text: "Seguro que desas borrar el carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borralo!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Borrado!",
            text: "Tu carrito a sido borrado.",
            icon: "success"
          });
          borrarCarrito()
        }
      });
    }
  }
  return (
    <div className="container cart-bar mb-3 mt-2 d-flex justify-content-between">
      <h2>{precioTotal() ? '$' + precioTotal() : 'Carrito vacio'}</h2>
      <div>
        <Link to='/formulario' className={!precioTotal() ? 'desactivado' : ''}>
          <button className="btn boton-cart btn-success p-0" >
            <img src={check} alt="" className='img-trash' />
          </button>
        </Link>
        <button 
        className={!precioTotal() ? 'btn btn-danger boton-cart desactivado'  : 'btn btn-danger  boton-cart' }
        onClick={alerta}>
          <img src={trash} alt="" className='img-trash' />
        </button>
      </div>
    </div>
  )
}
export default CartBar