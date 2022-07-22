import React,{createContext, useReducer} from 'react'

export const AddinSeveralColor = createContext()

export const addingColor =(state, action) => { 
  switch(action.type){
    case "BLACK":
      return {...state, color:'black'}
    case "BLUE": 
      return {...state, color:'blue'}
    default: 
      return state
  }
}

export const TitleProvider = ({children}) => {
  const [state, dispatch] = useReducer(addingColor, {color:"yellow"})

  return <AddinSeveralColor.Provider value={{...state, dispatch}} >
      {children}
  </AddinSeveralColor.Provider>
 
}