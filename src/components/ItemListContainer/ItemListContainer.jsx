import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { SkewLoader } from 'react-spinners'

const ItemListContainer = ( {greeting} ) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId } = useParams()

  useEffect( () => {
    setLoading(true)
    const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()
    dataProducts
      .then(resolve => setProducts(resolve))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  },[categoryId])

  return (
    <>
      <div>
        <h2 id='greeting'>{greeting}</h2>
      </div>
      {
        loading ? 
        <div id='spinners'>
          <SkewLoader color="#000000" />
        </div>
        :
        <ItemList products={products} />
      }
    </>
  )
}

export default ItemListContainer