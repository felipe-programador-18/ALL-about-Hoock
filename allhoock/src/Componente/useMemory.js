import React, {useState, useEffect, useMemo} from "react"


const PracticeMemo = () => {
    const [number , setNumber ] = useState(0)
  //  const Drawnumber = ["232","100","343"]
    
    const Drawnumber = useMemo(() => {
      return ["232","100","342"]
    },[])
   
    useEffect(() => {
     console.log("draw number went turned!!")
    },[Drawnumber])  
     

    return (<>
       <h1>Adding react memo here place</h1>
        
        <input type="text"    onChange={(e) => setNumber(e.target.value) }  />
        {Drawnumber.includes(number) ?  <p>true number </p> : <p>false number </p> }
       
    </>)

}

export default PracticeMemo