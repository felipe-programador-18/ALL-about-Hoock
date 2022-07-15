import { useCallback, useState } from "react"
import AnotherList from "./anotherlist"



const Morepractice = () => {
    
    const [couter, setcounter] = useState(0)
     
     const Receivedate = useCallback(( 
        () => {
            return ['name',"felipe","age:43", "gender","male"]
         }
       ), []) 

    return(<>
         <AnotherList  getdate ={Receivedate} />
        <h1>Adding more testing about callback {couter} </h1>
         <button onClick={()=> setcounter(couter+1) } >more one couter</button>
    
    </>)
}

export default Morepractice