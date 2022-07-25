import React, {useState, useEffect} from 'react'

const WorksCallback = ({mydates}) => {
     
    const [items, setItemns]  = useState([])
    console.log('test my itens', items)
    useEffect(() => {
     console.log('testing about how works useCallback here', items)
     setItemns(mydates)
    },[mydates])
    
    
    return(<>
        
        <ul>
         {items && items.map((iten) => ( <li key={iten}> {iten} </li> ))}

        </ul>
    
    
    </>)

}

export default WorksCallback