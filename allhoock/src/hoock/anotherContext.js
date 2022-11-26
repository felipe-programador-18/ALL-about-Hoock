import React,{createContext,useState} from 'react'

export const ManageContext =  createContext()

export const ManageAll = ({children}) =>{   
    const [counter, setCounter] = useState(2)
  
    return <ManageContext.Provider value={{counter, setCounter}} >
        {children}
       </ManageContext.Provider>

}