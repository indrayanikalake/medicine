import React, { useContext } from 'react';
import classes from './NavBar.module.css';
import { CartContext } from '../Context/CartContext';

const NavBar = ({onShow}) => {
  const {cartItems}=useContext(CartContext);
  const totalQuantity = cartItems.reduce((total, item) => total + Number(item.qty), 0);
  return (
    <div className={classes.head}>
      <h2 className='headtext__cormorant' style={{margin:'0 5rem'}}>Clothes</h2>
      <button className='custom__button' style={{margin:'0 10rem', 
      borderRadius:'10px',width:'10%'}} onClick={onShow}>cart:
      <span>{totalQuantity}</span></button>
    </div>
  )
}

export default NavBar;
       



