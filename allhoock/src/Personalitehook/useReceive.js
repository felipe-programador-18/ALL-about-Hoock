import React,{useContext} from 'react'
import { ManageContext } from '../hoock/anotherContext'

const ReceivePerso = () =>{
 
    const {counter, setCounter} = useContext(ManageContext)

    return( 
        <>
          <h1>Testing my hook about couter</h1>
          {counter}

          <button onClick={()=> setCounter(counter+1) } >+1</button> 
        </>
    )

}

export default ReceivePerso