import { useState, useEffect } from "react";




const PracticeAbit = () => {
  const [name, setName] = useState('')
  

  useEffect(() => {
   console.log("practice a bit about react just to refresh my mind")
  },[])
  
  
  return (<>
  
    <input onChange={() => setName(name)} />
    {name}
  
  </>)
}

export default PracticeAbit