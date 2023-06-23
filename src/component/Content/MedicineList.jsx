/* eslint-disable no-undef */

import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './Medicinelist.css';

const MedicineList = ({ medicines }) => {
  const { addItemToCart } = useContext(CartContext);


  const handleAddToCart = (item,quantity) => {

    addItemToCart({ ...item, qty:quantity  });
   
   
  };

 

  return (
    <div className='list'>
    <h2>Medicine List</h2>
      {medicines.map((item, index) => (
        <div key={index}>
          <h3>{item.nam}</h3>
          <p>Description: {item.des}</p>
          <p>Price: {item.price}</p>
          <button onClick={() => handleAddToCart(item,1)}>Add1</button>
          <button onClick={() => handleAddToCart(item,2)}>Add2</button>
          <button onClick={() => handleAddToCart(item,3)}>Add3</button>
        </div>
      ))}
    </div>
  );
};

export default MedicineList;