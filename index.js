
   const makeGame = () => {
     return {
       truthDeck: [],
       dareDeck: [],
       drawnCards: [],
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
           const { dareVals, truthVals, dareDeck, truthDeck,drawnCards } = this;
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
           console.log("truthcard", tCard);
         const usedTruth=this.drawnCards.push(tCard)
           console.log("usedTruth", usedTruth)
           return tCard
       },

       drawDare() {
         const dCard = this.dareDeck.pop();
         console.log("darecard", dCard);
        const usedDare=this.drawnCards.push(dCard);
           console.log("usedDare", usedDare);
           return dCard
         },
         drawRandom(tcards) {
             const randomCards = [];
             for (let i = 0; i < tcards; i++) {
              
                 randomCards.push(this.drawTruth())
             }
              console.log("random",randomCards);
             return randomCards
              
         }
         
     };
   };

   const myDeck = makeGame();
   myDeck.startGame();
    myDeck.drawTruth();
myDeck.drawDare();
myDeck.drawRandom();

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