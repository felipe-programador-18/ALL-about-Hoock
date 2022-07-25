import React, { useEffect, useState } from 'react'



const AddingSome = () => {
    const [number, setnumber] = useState(0)
    
    
    const Increased = () => {
       setnumber(number+2)
      }
 
    useEffect(() => {
       if(number>0){
        console.log("i am executed, when change", number)
       }
     },[number])

     useEffect(() => {
      console.log("etst", number)
     },[number])
  return(<>
     <h1>Testing code inside useeffecting </h1>
        {number}
    <button  onClick={Increased} >Adding more number</button>
  </>)
}

export default AddingSome