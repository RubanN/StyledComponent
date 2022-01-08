import React,{ useState} from 'react'

const StateTuritoial = () => {
    const [counter,setCounter] = useState(0)
    const [inputType,setInputType] = useState("Pedro")
    const chnageInput =(e)=>{
        let newwvalue = e.target.value
        setInputType(newwvalue)
        console.log()
    }
    // let counter =1;
    const increment =()=>{
        setCounter(counter+1 )
    }
    return (
        <div>
             {/* <button onClick={increment}>{counter}click</button> */}
             <input placeholder="enter something" onChange={chnageInput}/>
             {inputType}
        </div>
    )
}

export default StateTuritoial
