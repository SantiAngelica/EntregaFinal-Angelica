import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <div className="card">
            <figure className="figure-card">
                <img src={producto.src} className="card-img-top" alt="..." />
            </figure>
            <div className="card-body">
                <h5 className="card-title">{producto.modelo}</h5>
                <p className="card-text">${producto.precio}</p>
                <Link to={`/item/${producto.id}`} className="btn btn-primary">Ir al detalle</Link>
            </div>
        </div>
    )
}

export default Item