import React, { useRef, useState, useEffect } from 'react'

const PracticeReffe = () => {
   
    const [count, setCounter] = useState(0)
    const [grew, setGrew ] = useState(0) 
    const hereReffe = useRef(0)

   useEffect(() => {
    hereReffe.current = hereReffe.current +1
   })


    return (<>
    
    <h4>Practice about referred {hereReffe.current} how incresed more time ....  </h4>
    <button onClick={() => setCounter(count+1) } >count more +</button>
    <button onClick={() => setGrew(grew+1) } >grew+</button>
    
    </>)
}


export default PracticeReffe