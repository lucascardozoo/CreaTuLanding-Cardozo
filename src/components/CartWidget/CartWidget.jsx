import React, { useContext } from 'react'
import IconCart from './assets/icon-cart.svg'
import './CartWidget.css'
import Context from '../../context/CartContext'

const CartWidget = () => {
  const { getQuantity } = useContext(Context)

  return (
    <div id='container-icon-cart'>
      <img id='icon-cart' src={IconCart} alt="IconCart" />
      <span id='icon-cart-count'>
        {
          getQuantity() > 0 && getQuantity()
        }
      </span>
    </div>
  )
}

export default CartWidget