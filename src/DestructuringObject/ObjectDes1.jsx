import React from 'react'

const ObjectDes1 = () => {
    const numbers = [1,2,3,4,5,6,];
    const [a,b,c] = numbers
    console.log(a,b,c );
    const person={
        name:"ruban",
        age:23,
        address:{
            city:'chennai',
            street:'Main str',
            number:"223/1"
        }
    }
    const {age,address:{city}} = person
    return (
        <div>
            <h1>{age}</h1>
            <h2>{city}</h2>
            
        </div>
    )
}

export default ObjectDes1
