import AddingSome from "../Componente/useeeffect"
import { useVerify } from "../Personalitehook/useContext"
import {useVerifyColor} from "../Personalitehook/useColors"
import { useTesting } from "../Personalitehook/useReceive"
import CreateMoreEffect from "../Componente/createAnotherUsereffect"
import PracticeReffe from "../Componente/More.ref.userfe"
import BuildCallback from "../MoreHoock/usecallback"
import CreateExampleMemo from "../MoreHoock/useMemo"
import AddCallbackHere from "../CallbackandMemo/ReceiveCallback"
import MoreMemoHere from "../CallbackandMemo/ReceiveMemohere"
import PracticeEffect from "../Componente/moreEffective"
import PractCallmore from "../CallbackandMemo/Other.callpractice"


const Sobre = ( ) => {
   const{count, setCount} = useVerify()
   console.log('testing here', count) 
   
   const{counter, setCounter} = useTesting()
   console.log('testing my counter here', counter)

   const {color,dispatch} = useVerifyColor()
   console.log("i am here", color) 
   
   const AnotherColor = (color) => {
     dispatch({type:color})
   }
  
  
  return (<>
         <div style={{background:color}} >

   <p>sobre</p>
   <p style={{background:color}} >sobre more about sobre</p>
     {count}
     <button onClick={() => setCount(count+1) } >Increased more one</button>
     <button onClick={ () =>  AnotherColor("BLACK") } >black</button>
     <button onClick={ () =>  AnotherColor("BLUE") } >blue</button>
        
     <CreateMoreEffect/>
     <PracticeReffe/>
     <BuildCallback/>

     <CreateExampleMemo/>
     <AddCallbackHere/>
     <MoreMemoHere/>

     <PracticeEffect/>
     <PractCallmore/>
       {counter}
      <button onClick={() => setCounter(counter+1)} >+1Increased</button>
   
      </div>
    </>)
}

export default Sobre