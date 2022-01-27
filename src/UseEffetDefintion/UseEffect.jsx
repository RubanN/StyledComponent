import React,{useEffect,useState} from 'react';

export const Message=()=>{
     const [name,setName] = useState('')  
        const changeName =(e)=>{
              setName(e.target.name)
        }
    return(
          <>
          {console.log("name--------------->",name)}
          <h1>{name}</h1>
         <input type ="text" placeholder="enter your name" onChange={changeName}  />    
           <Greet name="Ruban"/>
          </>
      )
}
const Greet = ({name}) => {
    const message = `Hello ${name}`
  
    useEffect(() =>{
        document.title=`Greetings to ${name}`
    },[name])
    console.log("message-------------->", message)
    return(
        <>
        {message}
        </>
    )
  
};


export default Greet;
