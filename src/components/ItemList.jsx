import Item from "./Item"

const ItemList = ({ productos, marca }) => {

    return (

        productos.map(producto => {
            if(marca){
                if(producto.marca == marca)
                {
                    return (
                        <Item key={producto.id} producto={producto} />
                    )
                }
            }
            else{
                return (
                    <Item key={producto.id} producto={producto} />
                )
            }
        })
    )
}

export default ItemList