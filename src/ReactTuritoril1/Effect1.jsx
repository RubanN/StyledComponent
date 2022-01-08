import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Effect1 = () => {
const [resourceType,setResourceType] = useState("posts")


// console.log("Render")
//  useEffect(() =>{
//      console.log("Resouce type chnage");
//  },[])
useEffect(() =>{
   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
   .then(res=>res.json())
   .then(json=>console.log(json))
},[resourceType])
    return (
        <>
         <button onClick={()=>setResourceType('posts')}>Posts</button>
         <button onClick={()=>setResourceType('Usres')}>Usres</button>
         <button onClick={()=>setResourceType('Comments')}>Comments</button>
        <h1>{resourceType}</h1>
        <h1>Hello</h1>
        </>
        
    )
}

export default Effect1
