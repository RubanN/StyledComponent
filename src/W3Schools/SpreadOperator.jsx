import React,{useState} from 'react'

export const SpreadOperator = () => {
    const [details,setDetails] =useState({
               name:"ruban",
               age:23,
    })
    const addProperty=()=>{
        setDetails({...details,lastName:"Cena",salary:"200000"})
    }
    console.log(details)
    return (
        <div>
            <h1>Change the age{details.age}</h1>
            {/* <button onClick={addProperty}>click</button> */}
        </div>
    )
}

export const ArraySpread=()=>{
    const [details,setDetails] =useState();
    const addProperty=()=>{
        setDetails([...details,"Mohan"])
    }
    return(
        <>
        {console.log("DETAILS",details)}
        {/* <button onClick={addProperty}>click</button> */}
        </>
    )
}
export const ArraySpread1 = ()=>{
    const [details,setDetails] =useState({ 
        name:"john",
        age:30,
        jobs:["Amxon","google","MiroSoft"]
    });
    const {jobs}=details
    const addProperty =()=>{
        setDetails({...details,jobs:["Apple","IBM",...jobs.slice(1,jobs.length)]})
    }
    return(
        <>
         {console.log("DETAILS",details)}
        <button onClick={addProperty}>click</button>
        </>
    )
}
export const ArraySpread2=()=>{
       const [details,setDetails] = useState({
           name:"Virat Kohil",
           age:29,
           profession:'Crickter',
           salary:'10,0000',
           place:'India',
           average:'55.08',
           hobbies:['Table tennies','football','cycling',]

       })

    //    const addProperty =()=>{
    //        setDetails(prev=>{
    //            return{
    //                ...prev,
    //                hob: prev.hob=34
    //            }
    //     })
    //    }
    const {hobbies}=details

    const addProperty=()=>{
        setDetails({...details,hobbies:["dancing",'treking',...hobbies.slice(1,hobbies.length)]})
    }
      

       return(
           <>
           {console.log("DETAILS",details)}
           <button onClick={addProperty}>CLick</button>
           </>
       )
}
export const ArraySpread3 = ()=>{
    const [text,setText] = useState({
            name:"Ruban",
            place:"Chennai",
            language:"React"
    })
    const updateDate=()=>{
       setText(prev=>{
           return{
               ...prev,
               name:prev.name=['Table',"react"]
           }
       })
    }
    return(
        <>
        <h2> {text.name}</h2>
        <h2> {text.place}</h2>
        <h2> {text.language}</h2>
        <button onClick={updateDate}>Click</button>
        </>
    )
}
export const ArraySpread4 = ()=>{
    const [details,setDetails] = useState({
        name:"ruban",
        age:23,
        profession:'reactjs',

    })
  const addProperty=()=>{
      setDetails({...details,lastName:"Cena",hobbies:'cricket'})
  }
    return(
        <>
    {/* <h1>Change the age{details}</h1> */}
        {    console.log(details)
}
       <button onClick={addProperty}>add more list</button>    
        </>
    )
}