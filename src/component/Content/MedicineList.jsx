/* eslint-disable no-undef */

import React, { useContext, useRef } from 'react';
import { CartContext } from '../Context/CartContext';

const MedicineList = ({ medicines }) => {
  const { addItemToCart } = useContext(CartContext);
  const qtyRef = useRef();
  const qty1Ref=useRef();

  const defaultMedicines = [
    { nam: 'Medicine 1', des: 'Description 1', price: 10 },
    { nam: 'Medicine 2', des: 'Description 2', price: 20 },
    { nam: 'Medicine 3', des: 'Description 3', price: 30 },
  ];


  const handleAddToCart = (item) => {

    const qty = qtyRef.current.value;
    const qty1=qty1Ref.current.value;
    const qtotal=qty+qty1;
    addItemToCart({ ...item, qtotal });
    qtyRef.current.value = '';
    qty1Ref.current.value='';
   
  };

 

  return (
    <div>
    <h2>Medicine List</h2>
    
    
     {defaultMedicines.map((item, index) => (
        <div key={index}>
          <h3>{item.nam}</h3>
          <p>Description: {item.des}</p>
          <p>Price: {item.price}</p>
          <div>
            Quantity:
            <input type="number" ref={qty1Ref} placeholder="Enter quantity" required />
          </div>
          <button onClick={() => handleAddToCart(item)}>Add</button>
        </div>
      ))}
     
      {medicines.map((item, index) => (
        <div key={index}>
          <h3>{item.nam}</h3>
          <p>Description: {item.des}</p>
          <p>Price: {item.price}</p>
          <div>
            Quantity:
            <input
              type="number"
              ref={qtyRef}
              placeholder="Enter quantity"
              required
            />
          </div>
          <button onClick={() => handleAddToCart(item)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default MedicineList;