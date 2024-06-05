import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ( {id, nombre, precio, img} ) => {
  return (
    <div className='card'>
      <figure>
        <img className='img-card' src={img} alt={nombre} />
      </figure>
      <div className='body-card'>
        <h2 className='name-card'>{nombre}</h2>
        <p className='precio-card'>$ {precio}</p>
      </div>
      <button className='btn-add-cart'>
        <Link to={`/producto/${id}`}>Ver detalle</Link>
      </button>
    </div>
  )
}

export default Item
