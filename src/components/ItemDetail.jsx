import AgregarItem from "./AgregarItem"

const ItemDetail = ({ producto }) => {
    if(producto.modelo){
        return (
            <div className="container d-flex justify-content-center mt-5 mb-5">
                <div className="card card-detail mb-3" >
                    <div className="row g-0">
                        <figure className="col-md-4 figure-detail mb-0">
                            <img src={producto.src} className="img-fluid rounded img-detail" alt={producto.modelo} />
                        </figure>
                        <div className="col-md-8 body-detail">
                            <div className="card-body">
                                <h5 className="card-title">{producto.modelo}</h5>
                                <p className="card-text">{producto.detalle}</p>
                                <p className="card-text">${producto.precio}</p>
                                <AgregarItem producto={producto} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <h2 className="prod-no">Producto no encontrado</h2>
        )
    }
}

export default ItemDetail