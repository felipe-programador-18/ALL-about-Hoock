import { useState, useEffect } from "react";




const PracticeAbit = () => {
  const [name, setName] = useState('')
  

  useEffect(() => {
   console.log("practice a bit about react just to refresh my mind")
  },[])
   
  const onChangeaBit = (e) => {
    e.preventDefault()
    setName("")
  }
   
  
  return (<>

    <form onSubmit={onChangeaBit}  >
      <input type="text"
        placeholder="TO PRACTICE A BIT"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {name}
      
    </form>
  </>)
}

export default PracticeAbit