import React,{useState, useEffect} from 'react'


const List = ({getitems}) => {
     const [item, seitem] = useState([])
     console.log('test in list', item)
     useEffect(() => {
      console.log("search items about my database")
      seitem(getitems)
     },[getitems])
    
    return ( <div>

        <h1>list together works with callbacks</h1>
      
             
        <ul>
            {item && item.map((item) => (
                <li key={item} > {item} </li>
            ) )}
        </ul>
    </div>)
}

export default List