import React, { useContext, useState } from 'react'
import Context from '../../context/CartContext'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from '@chakra-ui/react'
import './Checkout.css'
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })
    const [ error, setError ] = useState({})
    const [ loading, setLoading ] = useState(false)

    const { cart, getTotal, clearCart } = useContext(Context)

    const navigate = useNavigate()

    const updateUser = (event) =>{
        setUser( (user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        
        if (!user.name) {
            errors.name = 'Tenes que agregar un nombre'
        } else if (user.name.length < 4) {
            errors.name = 'El nombre debe tener al menos 4 caracteres'
        }

        if (!user.email) {
            errors.email = 'Tenes que agregar un email'
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'El email no es valido'
        }

        if (!user.repeatedEmail) {
            errors.repeatedEmail = 'Tenes que repetir el email'
        } else if (user.repeatedEmail !== user.email) {
            errors.repeatedEmail = 'El email no coincide'
        }

        if (!user.phone) {
            errors.phone = 'Tenes que agregar un teléfono'
        } else if (user.phone.length < 8) {
            errors.phone = 'El teléfono no es valido'
        }

        setError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        if (!validateForm()){
            return
        }

        if(cart.length === 0) {
            Swal.fire({
                title: "Carrito vacío",
                text: `Debes agregar productos al carrito para generar la orden`,
                icon: "error",
                iconColor: "#ff0000",
                confirmButtonText: "Ver productos",
                buttonsStyling: false,
                customClass: {
                    popup: 'sweetalert-container',
                    title: 'sweetalert-title',
                    confirmButton: 'sweetalert-btn',
                },
            }).then(() => {
                    navigate('/')
                });
            return
        }

        const coleccion = collection(db, 'orders')

        try {
            for (const item of cart) {
                const docRef = doc(db, 'productos', item.id)
                const productDoc = await getDoc(docRef)

                const currentStock = productDoc.data().stock

                if (currentStock >= item.quantity){
                    await updateDoc(docRef, {
                        stock: currentStock - item.quantity
                    })
                } else {
                    Swal.fire({
                        title: "Stock insuficiente",
                        text: `No hay suficinete stock del producto: ${item.nmbre}`,
                        icon: "error",
                        iconColor: "#ff0000",
                        confirmButtonText: "Aceptar",
                        buttonsStyling: false,
                        customClass: {
                            popup: 'sweetalert-container',
                            title: 'sweetalert-title',
                            confirmButton: 'sweetalert-btn',
                        },
                    })
                }
            }

            const order = {
                buyer: user,
                cart: cart,
                total: getTotal(),
                fecha: Timestamp.now()
            }

            const orderRef =  await addDoc(coleccion, order)
            
            Swal.fire({
                title: "Gracias por tu compra",
                text: `El número de orden es: ${orderRef.id}`,
                icon: "success",
                iconColor: "#22fc00",
                confirmButtonText: "Ir al inicio",
                buttonsStyling: false,
                customClass: {
                    popup: 'sweetalert-container',
                    title: 'sweetalert-title',
                    confirmButton: 'sweetalert-btn',
                },
            }).then(() => {
                    clearCart()
                    navigate('/')
                });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div id='form-container'>
            <h2 id='form-title'>Datos de facturación</h2>
            <FormControl isInvalid={Object.keys(error).length > 0}>
                <FormLabel>Nombre</FormLabel>
                <Input 
                    type='text'
                    name='name'
                    onChange={updateUser}
                    />
                <FormErrorMessage>{error.name}</FormErrorMessage>
                <FormLabel>Email</FormLabel>
                <Input 
                    type='text'
                    name='email'
                    onChange={updateUser}
                    />
                <FormErrorMessage>{error.email}</FormErrorMessage>
                <FormLabel>Repetir Email</FormLabel>
                <Input 
                    type='text'
                    name='repeatedEmail'
                    onChange={updateUser}
                    />
                <FormErrorMessage>{error.repeatedEmail}</FormErrorMessage>
                <FormLabel>Telefono</FormLabel>
                <Input 
                    type='number'
                    name='phone'
                    onChange={updateUser}
                    />
                <FormErrorMessage>{error.phone}</FormErrorMessage>
            </FormControl>
            <button id='btn-finalizar-compra' onClick={getOrder}>Finalizar compra</button>
        </div>
    )
}

export default Checkout
