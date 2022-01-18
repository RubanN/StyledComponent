import React,{useState} from 'react'

const FirstUseState = () => {
    const [count,setCount] = useState(0)
    return (
        <div> 
        <button type="button" onClick={()=>setCount(count+1)}>Click{count}</button>          
        </div>
    )
}
export default FirstUseState
export const HookCounter=()=>{
    const initialCount =0;
    const [count,setCount] = useState(initialCount);
    return(
        <>
          Count:{count}
          <button onClick={()=>setCount(initialCount)}>Reset</button>
          <button onClick={()=>setCount(count+1)}>Increment</button>
          <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
}
export const HooksCounterThree =()=>{
    const [name,setName] = useState({firstName:"",lastName:"",});
    return (
        <>
        <form>
            <input type="text"
             value={name.firstName}
             onChange={e=>setName({...name,firstName:e.target.value})}
             />
             
            <input type="text" 
             value={name.lastName}
             onChange={e=>setName({...name,lastName:e.target.value})}/>
             <h1>Your first name is -{name.firstName}</h1>
             <h1>Your last name is -{name.lastName}</h1>
               </form>
        </>
    )
}
export const HooksArray =()=>{
    const [items,setItems] = useState([]);
    const addItem =()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }]);
    }
    return(
        <>
         <button onClick={addItem}>Add a number</button>
         <ul>
             {items.map(item=>(
                 <li key={item.id}>{item.value}</li>
             ))}
         </ul>
        </>
    )
}
export const HooksArray1 =()=>{
   const [employee,setEmployee] = useState({
       name:"Ruban",
       profession:"developer",
       place :'chennai',
       salary:'22,000',
       technologies:{
           programmingLanguage:'javascript',
           frontEnd:"Css",
           frameWork:'ReactJs',
       },   
   })
   const updateChange=()=>{
       setEmployee(prev=>{
           return{
               ...prev,
               name:prev.name="RUBAN"
           }
       })
   }
    return (
        <>
        <h1>{employee.name}</h1>
        <button onClick={updateChange}>Click</button>
            
        </>
    )
}
// const updateDate=()=>{
//     setText(prev=>{
//         return{
//             ...prev,
//             name:prev.name=['Table',"react"]
//         }
//     })
//  }