
import React,{useState, useEffect, useCallback} from 'react'
import WorksCallback from './unioncallback'

const BuildCallback = () => {
    const [increased, setIncreat ] = useState(0)
    const AddingDatabase = useCallback(() => {
       return ['felipe','programmer','here', 'my friends'] 
    },[])  
    
    return (<>
         <WorksCallback  mydates={AddingDatabase} />
       <h5>This is my value{increased}</h5>
       <button onClick={() =>  setIncreat(increased+1)} >Increased</button>

    
    </>)

}

export default BuildCallback