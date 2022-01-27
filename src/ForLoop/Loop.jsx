import React from 'react';

const Loop = () => {
    let solution =scores[2];
    // alert("solution 2 produced"+solution+"bubbles");
    var flavors = ["vanilla","butterscotch","lavender","chocate","cookies dough"];
    flavors[3] = "vanilla chocolate chip";
    var flavoresOfTheDay = flavors[3];
    console.log(flavoresOfTheDay);
    // console.log(flavors.length);

    var words1 = ['24/7','multi-tier','30,000 foot','B-to-B',"win-win"];
    var words2 = ['empowered','value-added','oriented','focused','aligned'];
    var words3 = ['process','solution','tipping-point','strategy','vision'];

    var rand1 = Math.floor(Math.random()*words1.length);
    var rand2 = Math.floor(Math.random()*words2.length);
    var rand3 = Math.floor(Math.random()*words3.length);
    var phrase = words1[rand1] + " " + words2[rand2] + "" + words3[rand3]
    let scores =[60,50,60,58,54,54,58,50,52,54,50,52,54,
                 34,55,52,44,51,69,64,66,55,52,61,28,69,
                 46,31,57,52,44,18,41,53,55,61,51,44,51,
    ];
    // var output;
    // var i=0;
    // while(i<scores.length){
    //     output = "bubble solution" + i+"score"+scores[i];
    //     // console.log(output);
    //     i=i+1
    // }



    // alert(phrase)
  return(
    <div>
  <h1>Hello</h1>
    </div>
  ) 
 
};

export default Loop;
