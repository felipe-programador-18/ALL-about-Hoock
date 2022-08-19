import React,{useReducer, useState} from 'react'
import TraningMore from './anotherReducer'

const TraningReducer = () => {

 const [number, dispatch] = useReducer((state,action) => {
    return Math.random(state)
 })

 const [othernumber, dispara] = useReducer((state, action) => {
    return Math.random(Math.floor(state))
 })


 // advantage in usereducer with action!!!


 const initialTaks = [
   {id:1, text:'doing several thigs'},
    {id:2 , text:"review several words"}
 ]

 
 
const taksreducer = (state, action) => {
    
   switch(action.type){
       case "ADD" :
          const newtasks = {
             id: Math.random(),
            text:textTaks,
         };
       setText("")

       return [...state, newtasks]

       case "DELETE":
       return state.filter((taks) =>  taks.id !== action.id)
          
       default:
         return state
      }
   }  

 const [textTaks, setText] = useState("")
 const [takss, dispatchTasks] = useReducer(taksreducer, initialTaks)

 const Handsubmit =  (e) =>{
   e.preventDefault()

   dispatchTasks({type:"ADD"})
 }

 const removeTask = (id) => {
   dispatchTasks({type:"DELETE", id: id})
 } 




  return(<>
    <TraningMore/> 

    <h2>Testing use Reducer ...  </h2>
    <p>My number is here {number}</p>
    <button onClick={dispatch} >alterar</button>


    <p>doing testing here{othernumber}</p>
    <button onClick={dispara} >Another testing here</button>
    
     

    <form onSubmit={Handsubmit} >
        <input type='text' value={textTaks} onChange={(e) => setText(e.target.value)} />
       
       <input type="submit" value='enviar' />

    </form>

    
    <p>another talks here with works with usereducer!!!</p>
    
    {takss.map((taks) => ( <li key={taks.id} onDoubleClick={ () => removeTask(taks.id)} > {taks.text}

    </li>))}
     

    
    <hr /> 


    </>)
}

export default TraningReducer