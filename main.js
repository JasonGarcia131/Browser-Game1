let deckObject = [
    {
        img: './img/ace1.jpeg',
        value: 1
    },
    {
        img: '',
        value: 1
    },
    {
        img: '',
        value: 1
    },
    {
        img: '',
        value: 1
    },
    {
        img: '',
        value: 2
    },
    {
        img: '',
        value: 2
    },
    {
        img: '',
        value: 2
    },
    {
        img: '',
        value: 2
    },
    {
        img: '',
        value: 3
    },
    {
        img: '',
        value: 3
    },
    {
        img: '',
        value: 3
    },
    {
        img: '',
        value: 3
    },
    {
        img: '',
        value: 4
    },
    {
        img: '',
        value: 4
    },
    {
        img: '',
        value: 4
    },
    {
        img: '',
        value: 4
    },
    {
        img: '',
        value: 5
    },
    {
        img: '',
        value: 5
    },
    {
        img: '',
        value: 5
    },
    {
        img: '',
        value: 5
    },
    {
        img: '',
        value: 6
    },
    {
        img: '',
        value: 6
    },
    {
        img: '',
        value: 6
    },
    {
        img: '',
        value: 6
    },
    {
        img: '',
        value: 7
    },
    {
        img: '',
        value: 7
    },
    {
        img: '',
        value: 7
    },
    {
        img: '',
        value: 7
    },
    {
        img: '',
        value: 8
    },
    {
        img: '',
        value: 8
    },
    {
        img: '',
        value: 8
    },
    {
        img: '',
        value: 8
    },
    {
        img: '',
        value: 9
    },
    {
        img: '',
        value: 9
    },
    {
        img: '',
        value: 9
    },
    {
        img: '',
        value: 9
    },
    {
        img: '',
        value: 10
    },
    {
        img: '',
        value: 10
    },
    {
        img: '',
        value: 10
    },
    {
        img: '',
        value: 10
    }
]
let playerCardContainer = document.querySelector('#playerCardContainer');
let playerCard1 = document.querySelector('#playersCard1');
let hitButton = document.querySelector('#hitButton');

// let cash = 1000;

function dealCards(){
    // let dealtCard = deckObject[0] //Math.floor(Math.random()*deckObject.length)
    // playerCard1.style.backgroundImage = `url('${dealtCard.img}')`;
    // playerCardContainer.appendChild(playerCard1)      
    let dealtCard = deckArray[Math.floor(Math.random()*deckArray.length)]  
    return dealtCard
}


function sumCards(card1, card2){
    let playerHandSum = card1 + card2
    console.log('card1: ' + card1)
    console.log('card2: ' + card2)
    console.log('sum: ' + playerHandSum)
    return playerHandSum
}


function hit(currentHand){
    let newCard = dealCards()
    console.log('------------------')
    console.log('newCard: ' + newCard)
    console.log('------------------')
    let newHand = sumCards(newCard, currentHand)
    console.log('new hand: ' + newHand)
    return newHand
}




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
    console.log('stay or hit')
     hitButton.addEventListener('click',async()=>{
        let round1 = hit(playerInitialHand)
        console.log('thid is rnning')
        if(round1 < 21){
            console.log('hit or stay?')
            hitButton.addEventListener('click',async ()=>{
                let round2 = hit(round1)
                if(round2 < 21){
                    console.log('hit or stay?')
                    hitButton.addEventListener('click',async ()=>{
                        let round3 = hit(round2)
                        if(round3 <= 21){
                            console.log('Ypu win')
                        }
                        else{
                            console.log('busted')
                        }
                    })
                }
                else{
                    console.log('busted')
                }
            })
        }
        else{
            console.log('busted')
       }
})
}

}
    //if(round1 == 21){
//             console.log('you win')
//         }
//         else if (round1 < 21){
//             async function phase2(){
//                 let round2 = await hit(round1)
//                 console.log(round2)
//                 if(round2 == 21){
//                     console.log('you win')
//                 }
//                 else if(round2 < 21){
//                     async function phase3(){
//                         let round3 = hit(round2)
//                         console.log(round3)
//                         if (round3 <= 21){
//                             console.log('you win!')
//                         }
//                         else{
//                             console.log('busted')
//                         }
//                     }
//                 }
//                 else{
//                     console.log('busted')
//                 }
//             }
//         }
//         else{
//             console.log('busted')
//         }
//     }
// else{
//     console.log('busted')
// }

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

