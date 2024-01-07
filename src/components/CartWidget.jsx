import iconoCart from '../assets/cart.svg'


const CardWidget = () => {
    return (
        <button type="button" className="btn position-relative d-flex align-items-center justify-content-center">
            <img src={iconoCart} alt="" width={24}/>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CardWidget