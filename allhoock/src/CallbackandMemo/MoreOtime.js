import {useCallback, useState} from "react"
import PreperToSend from "./TogeMoreOti"

const MakeMoreHere = () =>{

   const[counter, setCounter] = useState(0)
   console.log('testing more and last time about this',counter)
   const WorkMyCall = useCallback((
    () => {
        return ["programer", "Felipe Martins","Porto Alegre","speak english too"]
    }
   ),[])

    return (<>
     <h2>Adding more one and last time code about callback</h2>
      <PreperToSend addingmore={WorkMyCall} />
      <button onClick={() => setCounter(counter+3)} > To add 3+ </button>
       {counter}
    </>)

}

export default MakeMoreHere