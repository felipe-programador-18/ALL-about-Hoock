import AddingSome from "../Componente/useeeffect"
import { useVerify } from "../Personalitehook/useContext"
import {useVerifyColor} from "../Personalitehook/useColors"
import CreateMoreEffect from "../Componente/createAnotherUsereffect"
import PracticeReffe from "../Componente/More.ref.userfe"
import BuildCallback from "../MoreHoock/usecallback"
import CreateExampleMemo from "../MoreHoock/useMemo"
import AddCallbackHere from "../CallbackandMemo/ReceiveCallback"
import MoreMemoHere from "../CallbackandMemo/ReceiveMemohere"
import PracticeEffect from "../Componente/moreEffective"


const Sobre = ( ) => {
   const{count, setCount} = useVerify()
   console.log('testing here', count) 
   
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
      </div>
    </>)
}

export default Sobre