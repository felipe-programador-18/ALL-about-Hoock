import React, {useContext} from 'react'
import { creatManageContext } from '../hoock/context'


export const useVerify = () => { 
   const auth = useContext(creatManageContext)
   
   if(!auth){
    return console.log('not have context here')
   }
   return auth
}

