import React from 'react';

const FirstExample = () => {
//    let user1 = 'array';
//    const user2 = user1;
//    user1 = 'test'
//    console.log(user1)
//    console.log(user2) // deep copy

//    let user1 ={
//        name:"Array",
//        age:23,
//    }
//    const user2 = user1;
//    user1.name ="test";
//    console.log(user1)// shollow copy
//    console.log(user2)
//  let a =10;
//  const b =a;
//  a=20
//  console.log(a)
//  console.log(b)
  
//  var s1="hello";
//  var s2 =s1;
//  s2 ="Welcome"//Deep copy 
//  console.log(s1)
//  console.log(s2)
 
//  var bool1 = true;
//  var bool2 =bool1
//  bool2 =false
//  console.log(bool1)
//   console.log(bool2)



// Objects are shallow copy;
// var arr =[1,2,3,4,5,];
// var arr1 = [...arr]; // spread operator does deep copy of arr
// arr[0]=100;

// console.log(arr1);
// console.log(arr);


// var obj1 = {
//     name:'abc',
//     age:25,
// };
// var obj2 =obj1 // shallow copy
// obj2.age =32;


var obj1 = {
    name:'abc',
    age:25,
    mark:{
        m1:50,
        m2:60,
        m3:70
    }
};
// var obj2 =Object.assign({},obj1)
var obj2 =JSON.parse(JSON.stringify(obj1))
obj2.age =32;
obj2.mark.m1 =100;
console.log(obj1);
console.log(obj2);



return (
  <div>
     
  </div>
  )
};

export default FirstExample;
