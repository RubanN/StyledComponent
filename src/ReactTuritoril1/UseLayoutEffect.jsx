import React,{useRef} from 'react'

const UseLayoutEffect = () => {
    const inputRef = useRef(null)

    const onClick =()=>{
        inputRef.current.value=""
        console.log(inputRef.current)
    }
    return (
        <div>
             <h1>Padro</h1>
             <input type="text" placeholder="Ex.........." ref={inputRef}/>
             <button onClick={onClick}>Change Name</button>
        </div>
    )
}

export default UseLayoutEffect
