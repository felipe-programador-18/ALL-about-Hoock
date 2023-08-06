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
import TraningReducer from '../Reducer/useReducer'
import MakeMoreHere from '../CallbackandMemo/MoreOtime'
import PracticeAbit from '../Componente/Practicebit'



const Home = () => {
  const {color,dispatch} = useVerifyColor()
  console.log('testing in the color', color)

  const {count, setCount} = useVerify()
     
  
  const tradecolor = (color) => {
    dispatch({type:color})
  }


   
    return ( <> 
       <div style={{background:color}} >
       
       <TraningReducer/>
          

        <h1>Adding home here and adding component that contains useEffect </h1>
        
        <h1>
          <PracticeAbit/>
          
          PUT MY HANDS ON CODE NOW TO REFRESH A BIT ALL KNOWLEGDE THAT HAVE BEEN LEARN IN OVER THE YEAR</h1>
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
             <MakeMoreHere/>
        </div>
    </> )
}

export default Home