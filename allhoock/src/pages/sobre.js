import AddingSome from "../Componente/useeeffect"
import { useVerify } from "../Personalitehook/useContext"
import {useVerifyColor} from "../Personalitehook/useColors"


const Sobre = ( ) => {
   const{count, setCount} = useVerify()
   console.log('testing here', count) 
   
   const {color,dispatch} = useVerifyColor()
   console.log("i am here", color) 
   
   const tradeColor = (color) => {
     dispatch({type:color})
   }
  
  
  return (<>
         <div style={{background:color}} >

   <p>sobre</p>
   <p style={{background:color}} >sobre more about sobre</p>
     {count}
     <button onClick={() => setCount(count+1) } >Increased more one</button>
     <button onClick={ () =>  tradeColor("BLACK") } >black</button>
     <button onClick={ () =>  tradeColor("BLUE") } >blue</button>

      </div>
    </>)
}

export default Sobre