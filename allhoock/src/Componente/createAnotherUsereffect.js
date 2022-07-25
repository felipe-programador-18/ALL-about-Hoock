import React, { useEffect, useState } from 'react'



const CreateMoreEffect = () => {
     
    const[phase,setPhase] = useState('Felipe')
    
    useEffect(() => {
      console.log('here is my name', phase)
    },[])
     

    return(<>
    <h1>Traning more about useEffect</h1>
    <p>My name is <span>{phase}</span> </p>
    </>)
}

export default CreateMoreEffect