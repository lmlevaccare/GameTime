

let dareBtn = document.querySelector("#dare");
let truthBtn = document.querySelector("#truth");




function makePickDare() {
//   let truths = [
//     "who was your first kiss?",
//     "who was your favorite childhood friend?",
//     "what was your worst childhood prank?",
//   ];

  let dares = [
    "drink a tbsp on hotsauce!",
    "do 20 jumping-jacks",
    "show us your favorite dancemove!",
  ];

  const deckDare = [];
  const valuesDare = "1,2,3,4,5,6,7,8,9,10";
    for (let value of valuesDare.split(",")) {
        for (let dare of dares)  {
      
            deckDare.push({
                value,
                dare,
                
            });
        
    }
  }
  return deckDare;
}

function makePickTruth() {
  let truths = [
    "who was your first kiss?",
    "who was your favorite childhood friend?",
    "what was your worst childhood prank?",
  ];

   const deckTruth = [];
   const valuesTruth = "1,2,3,4,5,6,7,8,9,10";
  for (let value of valuesTruth.split(",")) {
   
      for (let truth of truths) {
        deckTruth.push({
          value,
          dare,
          truth,
        });
      }
    }
  
  return deckTruth;
}






function drawDare(deckDare) {
return deckDare.pop()
}
const myPickDare = makePickDare();
const cardDare = drawDare(myPickDare);

function drawTruth(deckTruth) {
    return deckTruth.pop()
}
const myPickTruth = makePickTruth();
const cardTruth = drawTruth(myPickTruth);


