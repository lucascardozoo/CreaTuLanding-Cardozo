import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SkewLoader } from 'react-spinners'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext'

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()
    const { currentQuantity } = useContext(Context)
    const navigate = useNavigate()

    useEffect( () => {
        const getData = async () => {
            // / Obtrenemos referencia de un producto en especifico de Firestore
            const queryRef = doc(db, 'productos', productId)
            
            // Obtenemos el documento
            const response = await getDoc(queryRef)

            // Creamos objeto con los datos del producto
             const newItem = {
                ...response.data(),
                id: response.id
            }

            setProduct(newItem)
            setLoading(false)
        }

        getData()
    },[])

    return (
        <>
            {
                loading ? 
                <div id='spinners'>
                    <SkewLoader color="#000000" />
                </div>
                :
                <ItemDetail {...product} currentQuantity={currentQuantity(productId)} />
            }
        </>
    )
}

export default ItemDetailContainer
