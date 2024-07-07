import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ( {id, nombre, precio, img, stock} ) => {
  return (
    <div className='card'>
      <figure>
        <img className='img-card' src={img} alt={nombre} />
      </figure>
      <div className='body-card'>
        <h2 className='name-card'>{nombre}</h2>
        {
          stock === 0 ? 
          <p className='stock-card'>Producto sin stock</p>
          :
          <p className='stock-card'>Stock: {stock}</p>
        }
        
        <p className='precio-card'>$ {precio}</p>
      </div>
      <Link to={`/producto/${id}`}>
        <button className='btn-add-cart'>Ver detalle</button>
      </Link>
    </div>
  )
}

export default Item
