import React, {useEffect,useState} from 'react'

const BuildMore = ({randombuilding}) => {
  
    const [number, setNumber] = useState([])
    console.log('testing more here', number)
    useEffect(() => {
      setNumber(randombuilding)
    },[randombuilding])
  

    return (<>
         <p>Let's practice a little bit</p>          
         <ul> 
          {number && number.map((num) => (
           <p key={num}> {num} </p>
           ))
          }
         </ul>

    </> )


}

export default BuildMore