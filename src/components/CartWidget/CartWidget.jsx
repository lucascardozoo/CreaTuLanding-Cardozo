import React from 'react'
import IconCart from './assets/icon-cart.svg'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div id='container-icon-cart'>
      <img id='icon-cart' src={IconCart} alt="IconCart" />
      <span>0</span>
    </div>
  )
}

export default CartWidget