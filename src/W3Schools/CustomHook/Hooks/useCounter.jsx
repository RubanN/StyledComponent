import { useState} from 'react'

const useCounter = (initialCount=0) => {
    const [count,setCount] = useState(0)
    const increment=()=>{
        setCount(prev=>prev+1)
    }
    const deCrement=()=>{
        setCount(prev=>prev-1)
    }
    const reset =()=>{
        setCount(initialCount)
    }
  return[count,increment,deCrement,reset]
}

export default useCounter
