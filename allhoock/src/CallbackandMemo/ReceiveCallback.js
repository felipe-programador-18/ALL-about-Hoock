import React,{useState, useCallback} from 'react'
import TraningCallback from '../Componente/anothercallback'


const AddCallbackHere = () => {
    const [counter, setCounter] = useState(0)
    
    console.log('testing here now more and more always', counter)
    const dates = useCallback((
        () => {
            return ["i need study more and more for me getting evolve in the life",
        12,32,54,656,87,87323,234,432,]
        }
    ),[])

    return(<>
    <TraningCallback  receiveDates={dates}  />
    <h5>Pass on callback here to training more and more </h5>
      {counter}

    <button onClick={() => setCounter(counter+1)} >Click here now</button>  
    
    </>)
}


export default AddCallbackHere
