import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { SkewLoader } from 'react-spinners'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemListContainer = ( {greeting} ) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId } = useParams()

  useEffect( () => {
    setLoading(true)

    const getData = async () => {
      // Obtrenemos referencia de la coleccion de Firestore
      const coleccion = collection(db, 'productos')

      // Creamos una referencia de consulta
      const queryRef = !categoryId ?
      coleccion
      :
      // Con query le pasamos la referencia de la coleccion de Firestore y los datos a filtrar
      query(coleccion, where('categoria', '==', categoryId))

      //Obtenemos los documentos
      const response = await getDocs(queryRef)
      
      // Mapeamos los documentos y creamos un objeto nuevo con los datos del producto
      // y el ID que definimos de manera automatica en Firestore
      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      
      // Actualizacion de los estados
      setProducts(productos)
      setLoading(false)
    }
    getData()

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