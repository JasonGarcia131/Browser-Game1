// let body = document.getElementsByTagName('body')
// let deckButton = document.getElementById('deckButton');
// let betButton = document.getElementById('betButton')
let hitButton = document.getElementById('hitButton')
// let stayButton = document.getElementById('stayButton')
// let score = document.getElementById('betAmount')
// let playerCard1 = document.getElementById('playersCard1')
// let playerCard2 = document.getElementById('playersCard2')
// let dealerCard1 = document.getElementById('dealersCard1')
// let dealerCard1 = document.getElementById('dealersCard2')
// let dealtCard = 0;
// let cash = 1000;


function dealCards(){

let dealtCard = deckArray[Math.floor(Math.random()*deckArray.length)]
return dealtCard

}

function sumCards(card1, card2){

let playerHandSum = card1 + card2
console.log('card1: ' + card1)// im consolelogging too many times 
console.log('card2: ' + card2)
console.log('sum: ' + playerHandSum)
return playerHandSum

}



let hit = hitButton.addEventListener('click',function hit(currentHand){

    let newCard = dealCards()
    console.log('------------------')
    console.log('newCard: ' + newCard)
    console.log('------------------')
    let newHand = sumCards(newCard, currentHand)
    console.log('new hand: ' + newHand)
    return newHand
},
true
)
console.log(typeof hit)



// On the page load, cards should be dealt
let deckArray = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10]
// let deckArray1 =[
//     {
//     'imgsrc' : 1 
//     },
//     {
//     'imgsrc' : 1 
//     },
//     {
//     // continue the object for all cards
//     //create logic for ace being 1 or 11
//     },
function gameStart(){
let playerInitialCard1 =  dealCards()
let PlayerInitialCard2 =  dealCards()
//let dealerInitialCard1 = dealCards()
//let dealerInitialCard2 = dealCards()
let playerHand = sumCards(playerInitialCard1, PlayerInitialCard2)
//let dealerInitialHand = sumCards(dealerInitialCard1, dealerInitialCard2)
// userChoice = true;
return playerHand
}

async function gameplay(){
let playerInitialHand = await gameStart()
if (playerInitialHand == 21){
   console.log('You got 21, you win!')
}
else if(playerInitialHand < 21){

    let round1 = hit(playerInitialHand);
    if(round1 == 21){
        console.log('you win')
    }
    else if (round1 < 21){
        let round2 = hit(round1)
        console.log(round2)
        if(round2 == 21){
            console.log('you win')
        }
        else if(round2 < 21){
            let round3 = hit(round2)
            console.log(round3)
            if (round3 <= 21){
                console.log('you win!')
            }
            else{
                console.log('busted')
            }
        }
        else{
            console.log('busted')
        }
    }
    else{
        console.log('busted')
    }
}
else{
    console.log('busted')
}
}
gameplay()
    //if(){//add function for hit onclick
        // let newCard3 = dealCards()// player has 3 cards 
        // console.log('newCard3: ' + newCard3)
        // let newHand = sumCards(newCard3, playerInitialHand)
        // let round1 = hit(playerInitialHand)
    //     if(round1 < 21){
    //        // let userChoice2 = stayOrHit()
    //         if(userChoice){
    //             // let newCard4 = dealCards()//player has 4 cards
    //             // console.log('newCard4: ' + newCard4)
    //             let round2 = hit()
    //             if(round2 < 21){
    //                 //let userChoice3 = stayOrHit()
    //                 if(userChoice){
    //                     let newCard5 = dealCards()
    //                     console.log('newCard5: ' +newCard5)
    //                     let round3 = sumCards(newCard5, round2)
    //                     if(round3 <= 21){
    //                         alert('you win! 5 cards!')//player has 5 cards automatic win
    //                     }
    //                     else{
    //                         alert('you busted!')
    //                     }
    //                 }
    //                 else{
    //                     alert('stayed 3')
    //                 }
    //             }
    //             else if(round2 == 21){
    //                 alert('you win!')
    //             }
    //             else{
    //                 alert('you busted!')
    //             }
    //         }
    //         else{
    //             alert('stayed')
    //         } 
    //     }
    //     else if(round1 == 21){
    //         alert('you win!')
    //     }
    //     else{
    //         alert('you busted')
    //     }
    // }
    // else{
    //     alert('stayed1')
    // }
//}
//buttons functions

 //object for player that keeps track of hand in array
 // onload = 2 card function
 //modify player object
 //player hand = array of objects {imgsrc = value}

 
 
//Sum the card values for each player


// // // let playerHandArray = []
// // // let dealerHandArray = []
// // let playerHandSum = 0;
// // let dealerHandSum = 0;

// let newSum = () =>{

//     let newCard = dealCards()
//     console.log('third card: ' + newCard)
//     playerHandSum = playershand + newCard
//     console.log("third plus initial" + playerHandSum)
//     return playerHandSum

// }

// playerHandSum = playerCard1 + playerCard2;
// console.log('initial sum : ' + playerHandSum)
// if(playerHandSum == 21){

//     console.log("automatic win: " + playerHandSum)
//     console.log('You Win!')

// }

// else if(playerHandSum<21){
  
//     let newPLayerHand = newSum()

//     if(newPLayerHand < 21){
//        let newPLayerHand1 = newSum(newPLayerHand)
//     }
//     else{
//         console.log('lose')
//     }
// }    
// // //     if(playerChoice = 'hit'){

// // //         playerhand3 = Math.floor(Math.random()*13 + 1)
// // //         playerHandSum += playerhand3;
// // //         console.log(playerHandSum)
// // //         if(playerHandSum < 21){
// // //             question()
// // //             if(playerChoice = 'hit'){
// // //             playerhand4 = Math.floor(Math.random()*13 + 1)
// // //             playerHandSum += playerhand4;
// // //             console.log(playerHandSum)
// // //             }

// // //         }
// // //     }
// // //     else{

// // //         return 0;
// // //         //invoke dealers function
// // //     }
// // //     if(playerHandSum > dealHandSum){
// // //         console.log('you win')
// // //     }
// // //     else{
// // //         console.log('you lose')
// // //     }


// // // }
// // }
// // gameplay()

