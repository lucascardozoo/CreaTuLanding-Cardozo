import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ( {products} ) => {
  return (
    <div id='container-cards'>
      {
        products.map((prod) => (
            <div key={prod.id}>
              <Item {...prod} />
            </div>
        ))
      }
    </div>
  )
}

export default ItemList
