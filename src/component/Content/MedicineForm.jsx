import React, {  useRef } from 'react'



const MedicineForm = ({addMedicine}) => {
    const nameRef=useRef();
    const desRef=useRef();
    const priceRef=useRef();
    
 


    const formHandler=(e)=>{
      e.preventDefault();
     const nam=nameRef.current.value;
      const des=desRef.current.value;
      const price=priceRef.current.value;
    

        const medicine={
           nam,
           des,
           price
          
         
         
        }
        
        addMedicine(medicine);

        nameRef.current.value='';
        desRef.current.value='';
        priceRef.current.value='';
        
    
    }
  return (
    <div>
      <form onSubmit={formHandler}>
        <div>Candy Name:
            <input
            type='text'
            ref={nameRef}
            placeholder='enter a name'
            required
             />
        </div>
        <div>Description:
            <input 
            type='text'
            ref={desRef}
            placeholder='enter content'
            required
            />

        </div>
        <div>Price:
            <input 
            type='number'
            ref={priceRef}
            placeholder='enter price'
            required
            />

        </div>
       
        <button type='submit' className='custom__button'>Add To Cart</button>
      </form>
    </div>
  )
}

export default MedicineForm
