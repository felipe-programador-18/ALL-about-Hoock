import {useState, useReducer} from 'react'

const TraningMore = () => {

    const users = [
        {id:1, name:"Programmer Felipe"},
        {id:2, name:"Traning more about code"}
    ]

   const InitialState = (state, action) => {
     switch(action.type){
       case "ADD":
        const ThinkMore = {
            id: Math.random(),
            name: trane,
        };
        setTraning("") 
        return [...state, ThinkMore]
       
       case "DELETE":
        return state.filter((user) => user.id !== action.id) 
        
        default:
            return state;
    }  
   }

   const [trane, setTraning] = useState("")
   const [newuser, dispatch] = useReducer(InitialState,users)
   
   console.log("what i have here ?", newuser)
    
   const HandSubmit = (e) => {
    e.preventDefault()
    dispatch({type:"ADD"})
   }

   const removedDates = (id) =>{
    dispatch({type:"DELETE", id:id})
   }

    return(<>
    


      <form onSubmit={HandSubmit}>
      <input type='text' value={trane} onChange={(e) => setTraning(e.target.value)} />  
       
       <input type='submit' value='SendDates!' />
      </form> 

        
    
     {newuser.map((user) => ( <li key={user.id} onDoubleClick={ ()=> removedDates(user.id)} >
      {user.name}
     </li> ))}
       

     <hr />  
    
    </>)
}


export default TraningMore