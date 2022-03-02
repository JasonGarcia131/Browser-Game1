let deckObject = [
    {
        img: './img/1club.png',
        value: 1
    },
    {
        img: './img/1hearts.jpg',
        value: 1
    },
    {
        img: './img/1spades.png',
        value: 1
    },
    {
        img: './img/1diamond.png',
        value: 1
    }
    ,
    {
        img: './img/2hearts.png',
        value: 2
    },
    {
        img: './img/2diamond.jpg',
        value: 2
    },
    {
        img: './img/2clubs.jpg',
        value: 2
    },
    {
        img: './img/2spades.png',
        value: 2
    },
    {
        img: './img/3spades.png',
        value: 3
    },
    {
        img: './img/3hearts.jpg',
        value: 3
    },
    {
        img: './img/3diamond.png',
        value: 3
    },
    {
        img: './img/3clubs.jpg',
        value: 3
    }/*,
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
    }*/
]
let playerCardContainer = document.querySelector('#playerCardContainer');
let playerCard1 = document.querySelector('#playersCard1');
let playerCard2 = document.querySelector('#playersCard2');
let playerCard3 = document.querySelector('#playersCard3');
let playerCard4 = document.querySelector('#playersCard4');
let playerCard5 = document.querySelector('#playersCard5');
let dealerCard1 = document.querySelector('#dealersCard1');
let dealerCard2 = document.querySelector('#dealersCard2');
let dealerCard3 = document.querySelector('#dealersCard3');
let dealerCard4 = document.querySelector('#dealersCard4');
let dealerCard5 = document.querySelector('#dealersCard5');
let playerWallet = document.querySelector('#yourWallet');
let hideButton = document.querySelectorAll('.playerOptionButton');
let playerHandArray = [];
let playerCash = 300;


function hideHomepage(){    //1. This function runs when user clicks start on the homepage.
    let homepage = document.querySelector('#home-navigation');
    homepage.style.display = 'none';
    onStart(playerCash);  // 2. This function gets invoked.
}

function onStart(playerCash){ //3 this function runs third. Passes the latest value for the variable.
    playerWallet.innerHTML = `Your Wallet: ${playerCash}`;
    let playerInitialCard1 = dealCards(); // 4 declares a random index of deckObject to this variable
    playerCard1.style.backgroundImage = `url('${playerInitialCard1.img}')`; // line 185 and 187 loads the first two cards when game begins.
    let playerInitialCard2 = dealCards(); // 
    playerCard2.style.backgroundImage = `url('${playerInitialCard2.img}')`; 
    playerCard3.style.backgroundImage = `url('img/facedowncard.png')`;
    playerCard4.style.backgroundImage = `url('img/facedowncard.png')`;
    playerCard5.style.backgroundImage = `url('img/facedowncard.png')`;
    console.log('card1 value: ' + 'card2 Value: ' + playerInitialCard2.value);
    playerHandArray.push(playerInitialCard1)
    playerHandArray.push(playerInitialCard2)
}

function dealCards(){
    let dealtCard = deckObject[Math.floor(Math.random()*deckObject.length)];
    console.log('dealt card: ' + dealtCard.value);   
    return dealtCard;
}

// function sumCards(card1, card2){  might need this for dealer
//     let playerHandSum = card1 + card2   
//     // console.log('card1: ' + card1)
//     // console.log('card2: ' + card2)
//     // console.log('sum: ' + playerHandSum)
//     return playerHandSum
// }
async function hit(){

    let newHand = 0;
    let newCard =  await dealCards();
    console.log('new card: ' + newCard.value);
    playerHandArray.push(newCard);
    console.log(playerHandArray);
    for(let i = 0 ; i < playerHandArray.length; i++){
       newHand += playerHandArray[i].value;
    }
    if(playerHandArray.length == 3){
       playerCard3.style.backgroundImage = `url('${newCard.img}')`;
    }
   else if(playerHandArray.length == 4){
        playerCard4.style.backgroundImage = `url('${newCard.img}')`;
    }
   else if(playerHandArray.length == 5){
        playerCard5.style.backgroundImage = `url('${newCard.img}')`;
    }
    console.log(newHand);
    check(newHand,playerHandArray.length);
   
}

function check(hand, numOfCards){
    if(hand == 21){
        playerCash = playerCash + 100;
        alert('You win! your cash: ' + playerCash);
        resetGame(playerCash);
    }
    else if(hand < 21 && numOfCards == 5){
        playerCash = playerCash + 100;
        alert('less than 21 5 cards you win!');
        resetGame(playerCash);
    }
    else if (hand > 21){
        
        playerCash = playerCash - 100
        alert('busted! your cash: ' + playerCash);
        resetGame(playerCash);
    }
}


function resetGame(cash){ 

    playerCard3.style.backgroundImage =  `url('img/facedowncard.png')`;
    playerCard4.style.backgroundImage =  `url('img/facedowncard.png')`;
    playerCard5.style.backgroundImage =  `url('img/facedowncard.png')`;
    playerHandArray = [] // Resets playerHandArray to an empty array for the next round.
    if(cash >= 100){
        onStart(cash);
    }
    else{
        alert('Not enough money');
        playerWallet.innerHTML = `Your Wallet: ${cash}`;
        returnHome();

    }
}

function returnHome(){

    window.location = 'index.html'

}

function hide(){
    hideButton.style.display = 'none';
}
function dealersTurn(){

    let playerHand = 0;
    for(let i = 0; i < playerHandArray.length; i++){
        playerHand += playerHandArray[i].value
    }
    card1 = dealCards()
    card2 = dealCards()
    dealerCard1.style.backgroundImage = `url('${card1.img}')`
    dealerCard2.style.backgroundImage = `url('${card2.img}')`
  

}

let deckArray = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10]
//function dealersTurn(){
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

//}
// Need to test how to append divs for eavh random card