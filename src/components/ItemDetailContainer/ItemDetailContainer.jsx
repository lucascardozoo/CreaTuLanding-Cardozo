import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductsById } from '../../data/asyncMock'
import { SkewLoader } from 'react-spinners'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        getProductsById(productId)
            .then((data) => {
                if (!data) {
                    navigate('/*')
                } else {
                    setProduct(data)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    },[])

    return (
        <>
            {
                loading ? 
                <div id='spinners'>
                    <SkewLoader color="#000000" />
                </div>
                :
                <ItemDetail {...product} />
            }
        </>
    )
}

export default ItemDetailContainer
