import React from 'react';

const Loop3 = () => {
  let scores =[60,50,60,58,54,54,58,50,52,54,50,52,54,
            34,55,52,44,35,51,69,64,66,55,52,61,28,69,
            46,31,57,52,44,18,41,53,55,61,51,44,51,
    ]
    var output;
    for(var i=0; i<scores.length;i++){
      output = "Bubble solution" +i+ "scores" +scores[i]
      console.log(output)
    }
    
  return(
 <div>

 </div>
  ) 
};

export default Loop3;
