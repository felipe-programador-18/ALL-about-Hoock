import {useState, useCallback} from "react"
import BuildMore from "../Componente/morethanCallback"


const PractCallmore = () => {
      
    const [counter, setCounter] = useState(0)
    console.log('what the well my code its not working', counter)
    const MakeCounter = useCallback( (
        () => {
            return ["12","2413","434","4324234","1000"]
        }
    ),[])

    return(<>  
     <h1>To practice again to reminder almost everything!!</h1>
      <BuildMore randombuilding={MakeCounter} />
       
      <button onClick={() => setCounter(counter+1)}>Works callback</button>
        {counter}
    </>)

}

export default PractCallmore