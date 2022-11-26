import React, {useContext} from 'react'
import { ManageContext } from '../hoock/anotherContext'

export const useReceive= () =>{
   
    const auth = useContext(ManageContext)

    if(!auth){
     return  console.log("testing my context here broo, not have context here")
    }
    return auth
}

