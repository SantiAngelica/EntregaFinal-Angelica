import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])



    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])



    const agregarAlCarrito = (producto, cantidad) => {
        const item = { ...producto, cantidad }
        const nuevoCarrito = [...carrito]
        const chequeoCantidad = nuevoCarrito.find((prod) => prod.id === item.id)
        if (chequeoCantidad) {
            chequeoCantidad.cantidad += cantidad
        }
        else {
            nuevoCarrito.push(item)
        }
        setCarrito(nuevoCarrito)

    }

    const cantidadItems = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const borrarItem = (id) => {
        const nuevoCarrito = carrito.filter(productos => productos.id != id)
        setCarrito(nuevoCarrito)
    }

    const borrarCarrito = () => {
        setCarrito([])
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
    }
    return (
        <CartContext.Provider value={{ agregarAlCarrito, cantidadItems, borrarItem, borrarCarrito, precioTotal, carrito }}>
            {children}
        </CartContext.Provider>
    )
}