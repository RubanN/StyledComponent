import React from 'react';

const HighScoreLoop = () => {
     let scores =[60,50,60,58,54,54,58,50,52,54,50,52,54,
            34,55,52,44,35,51,69,64,66,55,52,61,28,69,
            46,31,57,52,44,18,41,53,55,61,51,44,51,
    ]
    var highScores= 69;
     var output;
       for(var i=0; i<scores.length;i++){
           output = "Bubble solution" +i+ "score" + scores[i];
           console.log(output);
           if(scores[i]>highScores){
               highScores = scores[i];
           }
       }
    //    console.log("Bubbles tests"+scores[i].length);
    //    console.log("Highest bubble score"+highScores);
    var bestSolutions=[];
    for(var i=0; i<scores.length; i++){
        if(scores[i] ==highScores){
            bestSolutions.push(i)
        }
    }
    console.log("Solutions with the highest score"+bestSolutions);
    
    return(
    <div>

    </div>

  )
  
  
};

export default HighScoreLoop;

