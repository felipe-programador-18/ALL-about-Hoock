import React,{createContext,useState} from 'react'

export const ManageContext =  createContext()

export const ManageAll = ({children}) =>{   
    const [counter, setCounter] = useState(0)
  
    return ( <ManageAll value={{counter, setCounter}} >
        {children}
    </ManageAll> )

}