import React,{useEffect, useState} from 'react'


const PracticeEffect = () => {
    const[number, setNumber] = useState(0)        
    


    const testIncreased = () => {
        setNumber(number+1)
    }
    //practice a little about this!
    useEffect(() => {
       if(number>0){
         console.log("the numbers its change more on time")
       }
    },[number])


    return(
     <> 
        <h1>Practice more and more about that!!</h1>
        {number}
        <button onClick={() =>testIncreased()} >Increased</button>

     </>
    )
}


export default PracticeEffect