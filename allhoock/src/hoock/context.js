import React,{createContext,useState} from 'react'

export const creatManageContext = createContext()

export const AddProvideContext =  ({children}) => {
    const [count, setCount] = useState(0)

    return <creatManageContext.Provider value={{count,setCount}} >
        {children}
       </creatManageContext.Provider>
}