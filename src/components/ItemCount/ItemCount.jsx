import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ( { stock, valorInicial, onAdd } ) => {
    const [ count, setCount ] = useState(valorInicial)
    
    const incrementar = () => {
        count < stock && setCount(count + 1)
    }
    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
    }
  return (
    <>
        <div id='btn-count-container'>
            <button id='btn-decrementar' onClick={decrementar}>-</button>
            <span id='count'>{count}</span>
            <button id='btn-incrementar' onClick={incrementar}>+</button>
        </div>
        <button id='btn-add-cart' onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
    
  )
}

export default ItemCount
