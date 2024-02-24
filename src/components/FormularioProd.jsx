const FormularioProd = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito'))
    return (
        <div className="container mt-4 box-prod-form align-items-center">
            {carrito.map((producto) => {
                return (
                    <div className="card mb-3 card-form" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={producto.src} className="img-fluid rounded-start img-form" alt="..." />
                            </div>
                            <div className="col-md-8 d-flex align-items-center">
                                <div className="card-body p-0">
                                    <h5 className="card-title">{producto.modelo}</h5>
                                    <p className="card-text"><small className="text-body-secondary">{producto.precio}  x{producto.cantidad}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FormularioProd