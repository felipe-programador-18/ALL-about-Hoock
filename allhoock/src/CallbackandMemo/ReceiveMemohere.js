import React,{useState, useMemo, useEffect} from 'react'



const MoreMemoHere = () => {
   
    const[number, setNumber] = useState(0)

    const dates = useMemo(() => {
        return ["12","323","43543","234","545","34234"]
    },[])

    useEffect(() => {
       console.log('inseted dates and number')
    },[dates])


    return(<>
     <p>More traning more here to receive more dates now 
        how memo here
       
       <input type="text" onChange={(e) => setNumber(e.target.value)} />
        
        {dates.includes(number)? <p>this number is correctly</p>: <p>this number is false</p>  }

     </p>
    </>)
}


export default MoreMemoHere