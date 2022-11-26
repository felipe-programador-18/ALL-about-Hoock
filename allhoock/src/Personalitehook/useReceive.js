import {useContext} from 'react'
import { ManageContext } from '../hoock/anotherContext'

export const ReceivePerso = () =>{
   
    const auth = useContext(ManageContext)

    if(!auth){
       return  console.log("testing my context here broo, not have context here")
    }
    return auth
}

export default ReceivePerso