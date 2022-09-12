import React,{useState, useEffect} from 'react'

const TraningCallback = ({receiveDates}) => {
  
   const [list, setList] = useState([])
    
   useEffect(() => {
     setList(receiveDates)
   },[receiveDates])

return (<>
<h1>Training little bit about useCallbackmore here</h1>
    
    {list && list.map((lists) => (
        
          <p key={lists} > {lists} </p>    
     
    ))}

</>)
}

export default TraningCallback