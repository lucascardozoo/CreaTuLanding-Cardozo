import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';

const ItemDetail = ( {nombre, precio, stock, descripcion, img} ) => {
    const onAdd = (quantity) => {
        quantity === 1 ?
        toast(`Agregaste ${quantity} unidad`)
        :
        toast(`Agregaste ${quantity} unidades`) 
    }

    return (
        <div className='card-detail'>
            <figure>
                <img className='img-card-detail' src={img} alt={nombre} />
            </figure>
            <div className='body-card-detail'>
                <h2 className='name-card-detail'>{nombre}</h2>
                <p className='description-card-detail'>{descripcion}</p>
                <p className='precio-card-detail'>$ {precio}</p>
            </div>
            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
            <ToastContainer />
        </div>
    )
}

export default ItemDetail
