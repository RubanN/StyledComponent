import React,{useState} from 'react';

const Message = () => {
    const [message,setMessage] = useState('')
  return (
    <div>
        <h1>{message}</h1>
        <input type="text" value={message}
          onChange={e=>setMessage(e.target.value)}
        />

    </div>

  )
};
export default Message;
export const Message1 =()=>{
    const [message,setMessage] = useState("")
    return(
        <div>
       <input type="text"   value={message} onChange={(e=>{
           const val = e.target.value;
           setMessage(prev=>prev+val)
       })}/>
       <p>
           <strong>{Message}</strong>
       </p>
        </div>
    )
}
// Using an object as a state variable with useState hook

export const Message2 =()=>{
    const [message,setMessage] = useState("")
    const updateMessage=(e)=>{
        const val = e.target.value
        setMessage(prev=>{
            return {
                ...prev,
                message: val
            }
        })
    }
    // const update = ()=>{e => {
    //     const val = e.target.value;
    //     setMessage(prevState => {
    //       return Object.assign({}, prevState, { message: val });
    //     });
    //   }}
    return(
        <>
        <h2>{message}</h2>
        <input type="text" value={message} onChange={updateMessage}
        />
        </>
    )
}
export const Message3 =()=>{
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    return(
        <>
        <input type="text" value={message}
         placeholder="Enter a message"
         onChange={e=>{
             setMessage(e.target.value)
         }}
         />
        <input type="text" value="Add" 
         placeholder="Enter a value"
         onClick={e=>{
             setMessageList([
                 ...messageList,
                 {
                    id: messageList.length + 1,
                    message: message
                 }
             ])
             setMessage('')
         }}
        />
        {messageList.map(m=>(
            <li key={m.id}>{m.message}</li>
        ))}
        </>
    )
}
export const Toggle=()=>{
    const [toggle,setToggle] = useState(false)
    return(
        <>
        {console.log("toggle",toggle)}
        <button onClick={()=>setToggle(!toggle)}>Toggle Dropdown markup</button>
        {toggle &&(
            <ul>
                <li>Show me</li>
                <li>Only when</li>
                <li>Toggle === true</li>
            </ul>
        )}
        </>
    )
}
export const UpdateUseState=()=>{
    const [exampleState, setExampleState] = useState({
        masterField: {
            fieldOne: "a",
            fieldTwo: {
               fieldTwoOne: "b",
               fieldTwoTwo: "c"
               }
            },
            masterField2: {
                fieldOne: "c",
                fieldTwo: {
                   fieldTwoOne: "d",
                   fieldTwoTwo: "e"
                   }
                },
    })
    const updateMaster =()=>{
        setExampleState({
            ...exampleState,
            masterField: {
                fieldOne:'ruban',
                fieldTwo:{
                    fieldTwoOne: "CSS",
                    fieldTwoTwo: "React js"
                }
            }
        })
    }

    return(
        <>
        <h1>{exampleState.masterField.fieldOne}</h1>
        {/* <h1>{exampleState.masterField.fieldOne.fieldTwo.fieldTwoOne}</h1> */}

        <button onClick={updateMaster}>Update</button>
        </>
    )
}
export const UpdateUseState1 =()=>{
    const [state,setState] = useState({fName:"",lName:""})
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setState(prev=>({
            ...prev,
            [name]:value
        }))

    }
    return(
        <>
        <h1>{state.fName}</h1>
        <h1>{state.lName}</h1>

        <input
         value={state.fName}
         type="text"
         onChange={handleChange}
         name="fName"
        />
        <input
        value={state.lName}
        type="text"
        onChange={handleChange}
        name="lName"
        />
        </>
    )
}
export const UpdateUseState2 =()=>{
    const [infoData,setInfoData] =useState({
        major:{
            name: "John Doe",
            age: "24",
            sex: "M",
        },
        minor:{
            id: 4,
            collegeRegion: "south",
      
          }
    })
    const updateState=()=>{
        setInfoData((prev)=>({
            ...prev,
            major:{
                ...prev.major,
                name:"Tom Cruise"
            },
            minor:{
                ...prev.minor,
                collegeRegion:"NorthEast"
            }
        }))
    }
    return(
        <>
        <h3>{infoData.major.name}</h3>
        <h3>{infoData.minor.collegeRegion}</h3>
        <button onClick={updateState}>Update</button>
        </>
    )
}
