import React from 'react'
import AddingSome from '../Componente/useeeffect'
import AddReffered from '../Componente/userefff'
import Practicallba from '../Componente/useCallbackreac'
import Morepractice from '../Componente/Morecallback'
import PracticeMemo from '../Componente/useMemory'
import CreateUseLayout from '../Componente/useLayoutmore'
import AddingImperative from '../Componente/useImperative'
import { useVerify } from '../Personalitehook/useContext'

const Home = () => {
 
  const {count, setCount} = useVerify()
    
    return ( <>
           <h1>Adding home here and adding component that contains useEffect </h1>
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
    </> )
}

export default Home