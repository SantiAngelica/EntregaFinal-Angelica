
const ItemDetail = ({producto}) => {
    console.log(producto)
    return (
        <div className="card card-detail mb-3" >
            <div className="row g-0">
                <figure className="col-md-4 figure-detail mb-0">
                    <img src={producto.src} className="img-fluid rounded img-detail" alt={producto.modelo}/>
                </figure>
                <div className="col-md-8 body-detail">
                    <div className="card-body">
                        <h5 className="card-title">{producto.modelo}</h5>
                        <p className="card-text">{producto.detalle}</p>
                        <p className="card-text">${producto.precio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail