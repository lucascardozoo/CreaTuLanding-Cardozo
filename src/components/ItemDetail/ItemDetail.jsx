import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ( {id, nombre, precio, stock, descripcion, img, currentQuantity} ) => {
    const [ cantidad, setCantidad ] = useState(0)
    const { addItem } = useContext(Context)
    const maxAvailable = stock - currentQuantity

    const onAdd = (quantity) => {
        const item = {
            id,
            nombre,
            precio,
            stock
        }
        addItem(item, quantity)

        quantity === 1 ?
        toast(`Agregaste ${quantity} unidad`)
        :
        toast(`Agregaste ${quantity} unidades`)
        setCantidad(quantity)
    }

    const renderButtonOrItemCount = () => {
        if (cantidad > 0 || stock === 0 || stock === currentQuantity) {
            return (
                <Link to='/cart'>
                    <button id='btn-to-cart'>Ir al carrito</button>
                </Link>
            )  
        } else {
            return (
                <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} maxAvailable={maxAvailable} />
            )
        }      
    }

    return (
        <div className='card-detail'>
            <figure>
                <img className='img-card-detail' src={img} alt={nombre} />
            </figure>
            <div className='body-card-detail'>
                <h2 className='name-card-detail'>{nombre}</h2>
                <p className='description-card-detail'>{descripcion}</p>
                {
                    stock === 0 ?
                    <p className='stock-card-detail'>Producto sin stock</p>
                    :
                    <p className='stock-card-detail'>Stock: {stock}</p>  
                }              
                <p> Cantidad actual en el carrito: {currentQuantity}</p>
                <p className='precio-card-detail'>$ {precio}</p>
            </div>
            { renderButtonOrItemCount() }
            <ToastContainer />
        </div>
    )
}

export default ItemDetail
