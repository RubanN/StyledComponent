import React,{useState} from 'react'

export const UseStateW = () => {
    const [color,setColor] = useState('red')
    return (
        <div>
      <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={()=>setColor("blue")}>Blue</button>
            <button type="button" onClick={()=>setColor("Red")}>Red</button>
            <button type="button" onClick={()=>setColor("yellow")}>yellow</button>
            <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
        </div>
    )
}
export const UseStateW3 =()=>{
    const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");
    return(
        <> 
       
        </>
    )
}
export const UseStateW31 = ()=>{
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
   const updateColor =()=>{
       setCar(prev=>{
           return {...prev, color:"blue"}
       });
   }
      return(
          <>
          
          <h1>My car {car.brand}</h1>
          <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>

<button
        type="button"
        onClick={updateColor}
      >Blue</button>          </>
      )
}

export const SpreadHooks=()=>{
    const [person, setPerson] = useState({ name: 'alice', age: 30 });
    const changeAge =()=>{
        setPerson(prev=>{
            return{
                ...prev,
                age: prev.age+1
            }

        })
    }
    return(
        <>
        <h1>Pplase update your age{person.age}</h1>
        <button onClick={changeAge}>Click</button>
        </>
    )
}