import React, {useState,useEffect, useRef} from 'react'


const AddReffered = () => {
   
    const RefferedCreate = useRef(0)
    const [counter, setcounter] = useState(0)
     
    const[morecounter,setmorecounter] = useState(0)

     useEffect(() => {
     RefferedCreate.current = RefferedCreate.current +1
     })

     const gropone = () => {
        setcounter(counter+1)
     }
    
    return(<>
     
     <h1>works with useReffered in here place</h1>
     <h2>Useref</h2>
      
      <h3>The component rendering... {RefferedCreate.current} times...</h3>
      <h4>{counter}</h4>
      <h4> {morecounter} </h4>
      
      <button onClick={gropone} >GROP up</button>

        
      <button onClick={()=>  setmorecounter(morecounter+1) }  > {morecounter} </button>
    </>)
}

export default AddReffered