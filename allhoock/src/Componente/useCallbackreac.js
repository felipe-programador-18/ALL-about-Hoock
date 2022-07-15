import React, {useCallback, useState} from 'react'
import List from './listcall'


const Practicallba = () => {
    const [counter, setcounter] = useState(0)
     
    // simulating received date about data base//
    const getDatabase =  useCallback(() => {
        return ["a","c",'d']
    },[]) 
     
      
  return (<>
         
   <h1>Use callback here to learning and practice about that!!!</h1>
       
      <List getitems ={getDatabase} /> 
      <button onClick={()=> setcounter(counter+1) } >Alterar</button>
     <p> {counter} </p>
   <hr/>
  </>)
}

export default Practicallba