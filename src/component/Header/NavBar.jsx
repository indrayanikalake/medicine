import React, { useContext } from 'react';
import classes from './NavBar.module.css';
import { CartContext } from '../Context/CartContext';

const NavBar = ({onShow}) => {
  const {cartItems}=useContext(CartContext)
  return (
    <div className={classes.head}>
      <h2 className='headtext__cormorant' style={{margin:'0 5rem'}}>Medicine</h2>
      <button className='custom__button' style={{margin:'0 10rem', 
      borderRadius:'10px',width:'10%'}} onClick={onShow}>cart:
      <span>{cartItems.reduce((total,item)=>{return total+Number(item.qtotal)},0)}</span></button>
    </div>
  )
}

export default NavBar
       



