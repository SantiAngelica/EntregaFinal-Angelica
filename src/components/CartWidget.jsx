import { Link } from 'react-router-dom'
import iconoCart from '../assets/cart.svg'
import CartCounter from './CartCounter'


const CardWidget = () => {
    return (
        <Link to={'/cart'}>
            <button type="button" className="btn position-relative d-flex align-items-center justify-content-center">
                <img src={iconoCart} alt="" width={24} />
                <CartCounter/>
                
            </button>
        </Link>
    )
}

export default CardWidget