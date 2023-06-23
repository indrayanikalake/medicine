import React, { useState } from 'react';
import { NavBar,MedicineForm,MedicineList,CartContextProvider,Cart } from './component';

function App() {
    const [cartItem, setcartItem]=useState(false);
    const [medicines,setMedicines]=useState([]);

    const addMedicine=(medicine)=>{
        setMedicines([medicine,...medicines]);
    }

    const showCart=()=>{
        setcartItem(true);
    }
    const hideCart=()=>{
        setcartItem(false);
    }

  return (
    <CartContextProvider>
            {cartItem &&(<Cart onClose={hideCart}/>)}
          <NavBar onShow={showCart} />
         <MedicineForm  addMedicine={addMedicine}/>
        <MedicineList medicines={medicines}/>
     
          
       
      
    </CartContextProvider>
  );
}

export default App;
