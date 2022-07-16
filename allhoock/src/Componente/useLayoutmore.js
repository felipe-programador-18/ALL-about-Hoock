import React, {useEffect, useLayoutEffect, useState} from 'react'

const CreateUseLayout =  () => {
  
 const [name, setName] = useState("something name with value")
  
  useEffect(() => {
    console.log("2")
    setName("changed name!!!")
  },[]) 

  useLayoutEffect(() => {
   console.log("1")
   setName("another name here sincry")
  }, [])

  console.log(name)

return(<>
       <h1>This is useLayout Sincry!!</h1>
   <p> {name} </p>

</>)

}

export default CreateUseLayout