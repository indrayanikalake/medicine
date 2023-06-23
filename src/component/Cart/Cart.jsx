import React, { useContext } from 'react'
import './Cart.css'
import Modal from './Modal';
import { CartContext } from '../Context/CartContext';

const Cart = ({onClose}) => {
    const {cartItems}=useContext(CartContext);
  return (
    <Modal>
    <div className='cart'>
    {cartItems.map((item,index)=>(
        <div key={index}>
            <h3>{item.nam}</h3>
            <p>Qty:{item.qtotal}</p>
            <p>price:{item.price}</p>
            
        </div>
    ))}
    <button className='custom__button' onClick={onClose}>Close</button>
    </div>
    </Modal>
  )
}

export default Cart
