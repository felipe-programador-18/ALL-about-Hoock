import  {useRef} from 'react'
import TogetherImp from './togeImperative'


const AddingImperative = () => {
    const AddingRef = useRef()
    return (<>
     <h1>Imperative here</h1>   
     <TogetherImp ref={AddingRef} />
     
     <button onClick={()=> AddingRef.current.validate() } >Validate!!</button>
    
    </>)
}

export default AddingImperative