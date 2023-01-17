import { useState, useEffect } from "react";


const PreperToSend = ({addingmore}) => { 
   const[number, setNumber] = useState([])
   
   console.log('to add a new verification to see my code', number)
   useEffect(() => {
    setNumber(addingmore)
   },[addingmore])

   return(<>
     <h1>Im come back here now</h1>
       <ul>
        {number && number.map((numb) => (
            <p key={numb}>{numb}</p>
        ))}
       </ul>
   </>)

}

export default PreperToSend