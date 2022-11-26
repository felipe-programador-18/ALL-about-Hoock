import React, {useContext} from 'react'
import { ManageContext } from '../hoock/anotherContext'

export const useTesting= () =>{
    const authTest = useContext(ManageContext)
    if(!authTest){
     return  console.log("testing my context here broo, not have context here")
    }
    return authTest
}

