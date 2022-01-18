import React,{useState,useEffect} from 'react'
// import useInput from './Hooks/useInput';

const UserForm = () => {
    // const [firstName,setFirstName] = useState('');
    // const [lastName,setLastName] = useState('');
    //  const [bindFirstName,resetFirstName]= useInput('')
    //  const [bindLastName,resetLastName]= useInput('')

    // const submitHandler=(e)=>{
    //     e.preventDefault();
    //     alert(`Hello${firstName} ${lastName}`)
    //     resetFirstName();
    //     resetLastName();
    // }
    return (
        <form  onSubmit={submitHandler}>
            {/* <div>
                <label>First name</label>
                <input type="text" 
                  {...bindFirstName}
                />
            </div>
            <div>
                <label>Last name</label>
                <input type="text"
                {...bindLastName}
                />
            </div>
            <button type="submit" onClick={submitHandler}>submit</button> */}
            {/* <useInput/> */}
        </form>
    )
}

export default UserForm
