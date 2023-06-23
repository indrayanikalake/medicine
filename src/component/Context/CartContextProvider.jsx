import React, { useState } from "react";
import { CartContext } from "./CartContext";

export const CartContextProvider=({children})=>{
 const [cartItems, SetCartItems]=useState([]);
 
 const addItemToCart=(item)=>{
    SetCartItems((prevItems)=>[item,...prevItems])
 }
 return(
    <CartContext.Provider value={{cartItems, addItemToCart}}>
        {children}
    </CartContext.Provider>
 )
}