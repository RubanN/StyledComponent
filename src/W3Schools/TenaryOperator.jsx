import React,{useState} from 'react'

const TenaryOperator = () => {
    const [notificationNumber, setNotificationNumber] = useState(0)

    return (
        <div>
        {notificationNumber >=1 &&
           <p>You have {notificationNumber} new notification</p>
        }
        </div>
    )
}
export default TenaryOperator
export const Tenary =()=>{
    // const [isLoggin,setisLoggedIn] = useState(true)
    const [ status, setStatus ] = useState(false)

    return(
        <>
        {console.log("DETAILS",status)}
        {/* {isLoggin ? <button>Logout</button>:<button>Login</button>} */}
        {status ===true ? <div>Login</div> : <div>Logout</div>} 
        {status ? <div>Ruban is not there </div>:<div>Ruban is there</div>}
        </>
    )
}
export const Tenary1 =()=>{
     const [toggle,setToggle] = useState(false)
     const toggleFunc=()=>{
         setToggle(!toggle)
     }
    return(
        <>
        <div 
    className={toggle ? "container salmon" : "container"}
    style={{height: toggle ? "400px" : "200px"}}
>
        {console.log(toggle)}
      <button onClick={toggleFunc}>Toggle</button>
      </div>
      </>
    )
}
export const Tenary2 =()=>{
    const [darkMode, setDarkMode] = useState(false);
    const teanryFunc =()=> setDarkMode(!darkMode);
    const styleDiv = {
        backgroundColor:darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
        textAlign:'center',
        padding:'2rem'
    }
    return(
        <>
        {console.log("DETAILS",darkMode)}
        <div style={styleDiv}>
           <button onClick={teanryFunc}>Click</button>
        </div>
        
        </>
    )
}

export const Tenary3 =()=>{
    const expand  = false;
    const name = "Ruban"
    return (
        <>
          {expand ===true ?(
        <h1>Hello</h1>
    ):(
        <h1>This is wrong</h1>
    )}
     {name ==="Ruban" ? (
         <h1>Yes right answer</h1>
     ):(
         <h1>Sorry wrong answer</h1>
     )}

        </>
    )
}
