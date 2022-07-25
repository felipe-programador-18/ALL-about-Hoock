import React, {useState, useEffect, useMemo} from 'react' 

const CreateExampleMemo = () => {
    
    const [moreone, setMoreone] = useState(0)
    console.log('what have here',moreone)
    const veryNumber = useMemo(() => {
      return ["100","200,", '300']
    },[] )

    useEffect(() => {
     console.log('verify is correctly number ?')
    },[veryNumber])
   

    return(<>
    
    <h6>Adding testing about react memo here!!!</h6>

     <input type="text" onChange={(e) => setMoreone(e.target.value)}  />

      {veryNumber.includes(moreone) ? <p>true is number is true</p> : <p>this number is wrong</p> }  

    </>)
}

export default CreateExampleMemo