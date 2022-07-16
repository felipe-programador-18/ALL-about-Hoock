import {useRef, forwardRef, useImperativeHandle} from 'react'

const TogetherImp = forwardRef((props, ref) => {
    const AnotherRef = useRef()
    
    useImperativeHandle(ref , () => {
        return {
            validate: () => {
                if(AnotherRef.current.value.length >3){
                    AnotherRef.current.value = "";
                }
            }
        }
    } )

    return(<>
        <h3>works inside useImperative hoock</h3>
        <p>Insert in max 3 caract:</p>
        <input type="text" ref={AnotherRef} />    
    </>)

}) 

export default TogetherImp