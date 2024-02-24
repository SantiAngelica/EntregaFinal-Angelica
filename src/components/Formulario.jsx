import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import Loading from './Loading';
import FormularioProd from './FormularioProd';


const Formulario = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [ loading, setLoading ] = useState(0)
    const [ pedidoId, setPedidoId ] = useState("")
    const { borrarCarrito, precioTotal, carrito } = useContext(CartContext)
    let fecha = new Date();
    const submit = (data) => {
        const pedido = {
            cliente: data,
            pedido: carrito,
            total: precioTotal(),
            fecha: fecha,
            estado: 'generada'
        }
        const pedidosRef = collection(db, 'pedidos')
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
            })
        setLoading(1)
        setTimeout(() => {
            setLoading(2)
            borrarCarrito()
        }, 3000);
    }
    if(loading == 1){
        return(
            <Loading/>
        )
    }
    if(loading == 2){
        return(
            <div className="container box-gpsc">
                <h2>¡Gracias por su compra!</h2>
                <p>ID de compra: {pedidoId}</p>
            </div>
        )
    }
    return (
        <div className="container box-form">
            <h2>Total de compra: ${precioTotal()}</h2>
            <form className="form" onSubmit={handleSubmit(submit)}>
                <div className="box-input-form">
                    <input type="text" placeholder="Ingresa tu nombre" className="input-form" {...register('nombre', {
                        required: true
                    })} />
                    {errors.nombre?.type === 'required' && <p>Campo requerido</p>}
                </div>
                <div className="box-input-form">
                    <input type="text" placeholder="Ingresa tu apellido" className="input-form" {...register('apellido', {
                        required: true
                    })} />
                    {errors.apellido?.type === 'required' && <p>Campo requerido</p>}
                </div>
                <div className="box-input-form">
                    <input type="number" placeholder="Celular" className="input-form" {...register('celular', {
                        required: true
                    })} />
                    {errors.celular?.type === 'required' && <p>Campo requerido</p>}
                </div>
                <div className="box-input-form">
                    <input type="email" placeholder="Ingresa tu correo" className="input-form" {...register('email', {
                        required: true,
                        pattern: /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
                    })} />
                    {errors.email?.type === 'pattern' && <p>Formato de email incorrecto</p>}
                    {errors.email?.type === 'required' && <p>Campo requerido</p>}
                </div>
                <div>
                    <button type="submit" className="boton-enviar ">Enviar</button>
                    <button type="reset" className="boton-enviar ms-4">Borrar</button>
                </div>
            </form>
            <FormularioProd/>
        </div>
    )
}

export default Formulario