import React from 'react'
import AddingSome from '../Componente/useeeffect'
import AddReffered from '../Componente/userefff'
import Practicallba from '../Componente/useCallbackreac'
import Morepractice from '../Componente/Morecallback'
import PracticeMemo from '../Componente/useMemory'
import CreateUseLayout from '../Componente/useLayoutmore'
import AddingImperative from '../Componente/useImperative'
import { useVerify } from '../Personalitehook/useContext'
import { useVerifyColor } from '../Personalitehook/useColors'

const Home = () => {
  const {color,dispatch} = useVerifyColor()
  console.log('testing in the color', color)

  const {count, setCount} = useVerify()
     
  
  const tradecolor = (color) => {
    dispatch({type:color})
  }


   
    return ( <> 
       <div style={{background:color}} >
           <h1>Adding home here and adding component that contains useEffect </h1>
          {color}
           <button onClick={() => tradecolor({color:'BLUE'})} > Trade another color </button>
           <button onClick={() =>  tradecolor({color:'BLACK'})} >
            Trade outer collors
           </button>
            {count}
             <AddingSome/>
             <AddReffered/>
             <Practicallba/>
             <br/>
             <hr/>
             <Morepractice/>
             <PracticeMemo/>
              
              <br/>
             <CreateUseLayout/>
             <AddingImperative/>
        </div>
    </> )
}

export default Home