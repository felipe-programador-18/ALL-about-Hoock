import React,{useEffect, useState} from 'react'


const PracticeEffect = () => {
    const[number, setNumber] = useState(0)        

    //practice a little about this!
    useEffect(() => {
       setNumber(number+1) 
    },[number])


    return(
     <>
        <h1>Practice more and more about that!!</h1>
     </>
    )
}


export default PracticeEffect