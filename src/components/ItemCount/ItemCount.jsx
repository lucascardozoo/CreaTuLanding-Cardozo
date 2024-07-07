import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ( { stock, valorInicial, onAdd, maxAvailable } ) => {
    const [ count, setCount ] = useState(valorInicial)
    
    const incrementar = () => {
        count < maxAvailable && setCount(count + 1)
    }
    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
    }
  return (
    <>
        <div id='btn-count-container'>
            <button className ='btn-decrementar' onClick={decrementar}>-</button>
            <span id='count'>{count}</span>
            <button className ='btn-incrementar' onClick={incrementar}>+</button>
        </div>
        <button id='btn-add-cart' onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
    
  )
}

export default ItemCount
