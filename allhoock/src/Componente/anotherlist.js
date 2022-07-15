import React, {useEffect, useState}  from 'react'



const AnotherList = ({getdate}) => {
    
    const [mylist, setmylist] = useState([])
  
     
    useEffect(() => {
      setmylist(getdate)
    },[getdate])


    return(<>
     <h1>adding more date here</h1>
      <ul>
      {mylist && mylist.map((more) =>  (
        <p key={more} > {more} </p>
       ))}
      </ul>
    </>)
}

export default AnotherList