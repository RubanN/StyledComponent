import React from 'react'

const objectDes = () => {
    let arr =[1,2,3,4,5,[6,[7]]];
    // let [first,second,thrid,four,five,six,seven,...rest] = arr;
    // console.log(five,[six,[seven]]);
    

    let employee = {
              id:1,
              name:"Ruban",
              age:21,
              department:'UI/UX',
              address:{
                  city:"Chennai",
                  country:'india'
              }     
    }
    // let {name:fullName,age} = employee;
    const {address} = employee;
    // console.log(address.city);
    // console.log(fullName="ruban doe",age);
    // console.log(age);
    function displayEmployee(employee) {
        console.log(`Employee name is ${employee.name} and age is ${employee.address}`);
    }
    // console.log(displayEmployee());

    
    return (
        <div>
            
        </div>
    )
}

export default objectDes
