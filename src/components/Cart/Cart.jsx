import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { MdDeleteForever } from "react-icons/md";
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal, decrementarItem, incrementarItem } = useContext(Context)

    if (cart.length === 0) {
        return (
            <div id='cart-vacio-container'>
                <h2 id='text-cart-vacio'>Todavia no agregaste productos al carrito</h2>
                <Link to='/'>
                    <button id='btn-ver-prod'>Ver productos</button>
                </Link>
            </div>
        )
    } else {
        return (
            <>
                <TableContainer id='cart-container'>
                    <Table variant='striped' colorScheme='teal'>
                        <Thead>
                            <Tr>
                                <Th>Nombre</Th>
                                <Th className='celda-table-center' isNumeric>Cantidad</Th>
                                <Th className='celda-table-center' isNumeric>Precio</Th>
                                <Th className='celda-table-center' isNumeric>Subtotal</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                cart.map((prod) => (
                                    <Tr key={prod.id}>
                                        <Td>{prod.nombre}</Td>
                                        <Td className='btn-celda-container'>     
                                            <button className='btn-decrementar' onClick={() => decrementarItem(prod.id)}>-</button>
                                            <p className='celda-quantity'>{prod.quantity}</p>
                                            <button className='btn-incrementar' onClick={() => incrementarItem(prod.id, prod.stock)}>+</button>
                                        </Td>
                                        <Td className='celda-table-center' isNumeric>{prod.precio}</Td>
                                        <Td className='celda-table-center' isNumeric>{prod.precio * prod.quantity}</Td>
                                        <Td className='celda-table-center' >
                                            <button onClick={() => removeItem(prod.id)}>
                                                <MdDeleteForever />
                                            </button>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Td></Td>
                                <Td></Td>
                                <Td className='celdas-table-total'>TOTAL</Td>
                                <Td className='celdas-table-total'>{getTotal()}</Td>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
                <div id='btn-cart-container'>
                    <button id='btn-clear-cart' onClick={() => clearCart()}>Vaciar Carrito</button>
                    <Link  to='/checkout'>
                        <button id='btn-pagar'>Pagar</button>
                    </Link>  
                </div> 
            </>
        )
    }
}

export default Cart
