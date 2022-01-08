import React,{useEffect,useState} from 'react'
import axios from 'axios'
const EffectTuriorial = () => {
    const [data,setData] = useState("ruban")
    const [count,setCount] = useState(0)
    // useEffect(() =>{
    // axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
    //              setData(res.data[0].email)})
    //              console.log("API IS CALLED");
    // },[count])

    // useEffect(() =>{
    //     console.log("Component willUnmount")
    //    const ref=  document.title = `you clicked${count} times`
    //    return ref
    // },[])
    const chnageName = (e)=>{
        setData(e.target.value)
    }
    useEffect(()=>{
    console.log(data)
    },[data])
    return (
        <div>
            <h1>{data}</h1>
            <div>{count}</div>
            <button onClick={
                ()=>setCount(count+1)
            }>Click</button>
            <input placeholder="enter your name" onChange={chnageName}/>
        </div>
    )
}

export default EffectTuriorial
