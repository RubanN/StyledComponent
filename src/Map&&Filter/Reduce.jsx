
const Reduce = () => {
    const ages =[33,12,20,166,5,54,21,44,61,33,13,45,64,32,25]

  let ageSum = 0;
  for(let i=0;i<ages.length;i++){
       ageSum += ages[i]
  }
  console.log(ageSum);

};

export default Reduce;
