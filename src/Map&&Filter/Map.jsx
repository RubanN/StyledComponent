import React from 'react';

const Map = () => {
    const marks =[34,53,67,23,98];
    //map
    //fail,pass
    // const grade = marks.map(function(e){
    //     let result = e >=45 ? "pass":'fail';
    //     return result
    // })
    // const grade = marks.map(function(e){
    //    return e >=45 ? "pass":'fail';
    // })
    // const grade = marks.map((e)=>{
    //      return e >=45 ? "pass":'fail';
    // })
    //     console.log(grade);
  
};
export default Map;
export const Map1 =()=>{
    const arr =[5,1,3,2,6]
    // const output = arr.map(function binary(x){
    //     return x.toString(2)
    // })
    // const output =arr.map((x=>{
    //     return x *2
    // }))
    // const output = arr.map((x)=>x.toString(2))
    // console.log(output);
    // const newArr = arr.map(function(val,index){
    //     return {key:index ,value:val*val}
    // })
    // console.log(newArr);
//    const map1 = arr.map((x)=>{return x.toString(2)})
//    console.log(map1);
//   for(var i=0;i<arr.length;i++){
//        arr[i] = arr[i] *3;
//   }
//   console.log(arr);
  

// let ans = arr.map(function(element){
//     return element *3
// })
//   console.log(ans);

// How to use map() over an array of objects
// let users = [
//     {firstName : "Susan", lastName: "Steward"},
//     {firstName : "Daniel", lastName: "Longbottom"},
//     {firstName : "Jacob", lastName: "Black"}
//   ];
//   let userNames = users.map(function(element){
//       return `${element.firstName} ${element.lastName}`
//   })

//   console.log(userNames);

const companies=[
    {name:"Company One",category:"finance",start:1981,end:2003},
    {name:"Company Two",category:"Retail",start:1992,end:2008},
    {name:"Company Three",category:"Auto",start:1999,end:2007},
    {name:"Company Four",category:"Retail",start:1989,end:2010},
    {name:"Company Five",category:"Technoly",start:2009,end:2014},
    {name:"Company Six",category:"Finance",start:1987,end:2010},
    {name:"Company Seven",category:"Auto",start:1986,end:1996},
    {name:"Company Eight",category:"Technology",start:2011,end:2016},
    {name:"Company Nine",category:"Retail",start:1981,end:1989},
]
const ages =[33,12,20,166,5,54,21,44,61,33,13,45,64,32,25]

//Map
//Create array of company names to
// const companyNames = companies.map((company) =>{
//        return company.name;
// })
// console.log(companyNames);
// const testMap = companies.map((company) =>{
//       return `${company.name} [${company.start} - ${company.end}]`
// });
//   const agesSquare = ages.map(age=>Math.sqrt(age))
//   const agesSquareTwo = ages.map(age=>age*2);
//   console.log(agesSquareTwo);
 
// const ageMap =ages.map(age=>Math.sqrt(age)).map(age=>age*2)
// console.log(ageMap);





}