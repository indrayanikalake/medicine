import React, { useState } from 'react';
import { NavBar,MedicineForm,MedicineList,CartContextProvider,Cart } from './component';
import './App.css'

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
    {cartItem && <Cart onClose={hideCart} />}
          <NavBar onShow={showCart} />
          <div className='app__wrapper'>
         <MedicineForm  addMedicine={addMedicine}/>
        <MedicineList medicines={medicines}/>
        </div>
    </CartContextProvider>
  );
}

export default App;
