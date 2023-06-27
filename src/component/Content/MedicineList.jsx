/* eslint-disable no-undef */

import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import './Medicinelist.css';

const MedicineList = ({ medicines }) => {
  const { addItemToCart } = useContext(CartContext);
  const [one, setOne] = useState(100);
  const [two, setTwo] = useState(70);
  const [three, setThree] = useState(60);



  const handleAddToCart = (item,updatedQuantity) => {

    addItemToCart({ ...item, qty:updatedQuantity  });
    setOne((prevOne) => prevOne - 1);
   
  };

  const handleAddToCart2 = (item, updatedQuantity) => {
    addItemToCart({ ...item, qty:updatedQuantity  });
    setTwo((prevTwo) => prevTwo - 1);
  };

  const handleAddToCart3 = (item, updatedQuantity) => {
    addItemToCart({ ...item, qty:updatedQuantity  });
    setThree((prevThree) => prevThree - 1);
  };

 

  return (
    <div className='list'>
    <h2>Medicine List</h2>
      {medicines.map((item, index) => (
        <div key={index}>
          <h3>{item.nam}</h3>
          <p>Description: {item.des}</p>
          <p>Price: {item.price}</p>
          <button onClick={() => handleAddToCart(item,1)}>Large :
          <span>{one}</span></button>
          <button onClick={() => handleAddToCart2(item,1)}>Medium : <span>{two}</span></button>
          <button onClick={() => handleAddToCart3(item,1)}>Small : <span>{three}</span></button>
        </div>
      ))}
    </div>
  );
};

export default MedicineList;