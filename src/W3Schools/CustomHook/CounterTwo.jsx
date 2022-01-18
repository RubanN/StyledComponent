import React,{useState,useEffect} from 'react'
import useCounter from './Hooks/useCounter'

const CounterTwo = () => {
  const [count,increment,deCrement,reset] = useCounter(10)
    return (
        <div>
            {/* <useCounter/> */}
            <h2>Count-{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={deCrement}>Decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterTwo
