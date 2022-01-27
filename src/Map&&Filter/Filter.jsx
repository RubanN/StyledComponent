const Filter = () => {
const arr =[1,2,3,4,5,6,7,8,9,10,];
const newArr = arr.filter(a=>a%2===0)
 
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
//  for(let i=0;i<companies.length;i++){
//      console.log(companies[i])
//  }
//   companies.forEach((x)=>{
//       console.log("forEach---->",x.name);
//   })
// let canDrink =[];
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }     
// }
// const canDrink = ages.filter((age)=>{
//      if(age >=21){
//          return true;
//      }
//      console.log(age);
// })
//   const canDrink = ages.filter(age=>age>=21);
//   console.log(canDrink);




  //filter Retail companies
//   const retailCompanies = companies.filter((company)=>{
//         if(company.category=== "Retail" ){
//             return true;
//         }
//   })

// const retailCompanies = companies.filter(company=>company.category ==="Retail")
//   console.log(retailCompanies);

//get 80s companies
// const eightiesCompanies = companies.filter(company=>(company.start>=
//     1980 && company.start <1990));
// console.log(eightiesCompanies);


//Get companies that lasted 10
//  const lastedTenYears = companies.filter(company=>(company.end -company.start >=10))
//  console.log(lastedTenYears);



















};

export default Filter;
