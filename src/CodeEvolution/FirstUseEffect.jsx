import React,{useState,useEffect} from 'react'
import axios from 'axios'
const FirstUseEffect = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")
    useEffect(() =>{
        console.log("UseEffect -Update document title");
        document.title = `You cliked ${count} times` 
    },[count])
 
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Click</button>        
        </div>
    )
}
export default FirstUseEffect
export const MouseOver =()=>{
   const [x,setX] = useState(0);
   const [y,setY] = useState(0);
    
  const logMousePosition =(e)=>{
      console.log("Mouse Event");
      setX(e.clientX);
      setY(e.clientY);
  }

   useEffect(()=>{
       console.log("UseEffect is called");
       window.addEventListener("mousemove",logMousePosition)
       return()=>{
           console.log("Component unMounted code");
              window.removeEventListener("mousemove",logMousePosition)
        }
   },[])
    return(
        <>
        <h1>Hooks X-{x}-y-{y}</h1>
        </>
    )
}
export const MouseContainer =()=>{
    const [display,setDisplay] = useState(true)
    return(
        <>
        <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
        {display && <MouseOver/>}
        </>
    )
}
export const IntervalHookCounter =()=>{
    const [count,setCount] = useState(0);
    // const tick =()=>{
    //     setCount(count+1)
    // }
    const tick =()=>{
        setCount(prev=>prev+1)
    }
    useEffect(() =>{
        const interval = setInterval(tick,1000);
        return()=>{
            clearInterval(interval)
        }
    },[])
    console.log("Times",count);

    return(
        <>
        {count}
        </>
    )
}
export const DataFetching=()=>{
      const [post,setPost] = useState({})
      const [id,setId] = useState(1)
   useEffect(() =>{
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(res=>{
           console.log(res);
           setPost(res.data)
       })
       .catch(err=>{
           console.log(err);
       })
   },[id])
      return(
        <>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <div>{post.title}</div>
        {/* <ul>
            {posts.map(post=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul> */}
        </>
    )
}

