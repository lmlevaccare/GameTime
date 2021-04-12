
   const makeGame = () => {
     return {
       truthDeck: [],
       dareDeck: [],
       drawnCards: [],
       // cards: ["Truth","Dare"],
       dareVals: [
         "drink a tbsp on hotsauce!",
         "do 20 jumping-jacks",
         "show us your favorite dancemove!",
         "runaround the room 5 times!",
       ],
       truthVals: [
         ,
         "who was your first kiss?",
         "who was your favorite childhood friend?",
         "what was your worst childhood prank?",
       ],

       startGame() {
         const { dareVals, truthVals, dareDeck, truthDeck, drawnCards } = this;
         for (let dare of dareVals) {
           for (let truth of truthVals) {
             if (truth) {
               truthDeck.push({
                 truth,
               });
             }
             if (dare) {
               dareDeck.push({
                 dare,
               });
             }
             console.log("Truthdeck", truthDeck);
             console.log("dareDeck", dareDeck);
           }
         }
       },
       drawTruth() {
         const tCard = this.truthDeck.pop();
         // const usedTruth=this.tCard.push(drawnCards);
         console.log("truthcard", tCard);
         // console.log("pushedTruth",usedTruth)
       },

       drawDare() {},
     };
   };

   const myDeck = makeGame();
   myDeck.startGame();
   myDeck.drawTruth();

// let doubles = document.createElement("truthCard")
// let multiples = document.getElementById("dareCard");

// let double = document.querySelector("#dare").addEventListener("click", clickDouble);

// function clickDouble(e) {
//     e.preventDefault()
  
//     console.log("click.click")
//     myDeck.drawMultiple(2);
//     console.log("doubles", doub[0],doub[1])
// doubles.textContent = doub;
//    document.body.append(doubles)
  
  
// }