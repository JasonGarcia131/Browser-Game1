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
let hitButton = document.querySelector('#hitButton');
let stayButton = document.querySelector('#stayButton');
let betButton = document.querySelector('#betButton');
let playerHandArray = [];
let playerCash = 300;
let dealerHandSum = 0;

let hideButton = document.querySelectorAll('.playerOptionButton')


function hideHomepage(){    //1. This function runs when user clicks start on the homepage.
    let homepage = document.querySelector('#home-navigation');
    homepage.style.display = 'none';
    onStart(playerCash);  // 2. This function gets invoked.
}

function onStart(playerCash){ //3 this function runs third. Passes the latest value for the variable.
    playerWallet.innerHTML = `Your Wallet: ${playerCash}`;
    flipCardDown(dealerCard1)
    flipCardDown(dealerCard2)
    flipCardDown(dealerCard3)
    flipCardDown(dealerCard4)
    flipCardDown(dealerCard5)
    flipCardDown(playerCard3)
    flipCardDown(playerCard4)
    flipCardDown(playerCard5)
    playersTurn()
    // playerHandArray.push(playerInitialCard1)
    // playerHandArray.push(playerInitialCard2)
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
    playerHandArray.push(newCard);
    console.log(playerHandArray);
    for(let i = 0 ; i < playerHandArray.length; i++){
       newHand += playerHandArray[i].value;
       console.log('Sum: '+ newHand)
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

function stay(){

    return check()
    
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
    return playerCash;
}

function flipCardUp(cardDiv, card){
    cardDiv.style.backgroundImage = `url('${card.img}')`;
}

function flipCardDown(faceDownCard){
    faceDownCard.style.backgroundImage =  `url('img/facedowncard.png')`;
}
function dealerCheck(playerHand,dealerHand){

    let cash = check()
    if(dealerHand < playerHand){
        let newCard = dealCards();
        return newCard;
    }
    else if(dealerHand > playerHand || dealerHandSum == 21){
        alert('dealer wins > player hand or == 21')
        cash = cash - 100;
        playerWallet.innerHTML = `update: ${cash}`
        // resetGame(cash)
    }
    else{
        alert('Dealer Loses')
        cash = cash + 100;
        playerWallet.innerHTML = `update: ${cash}`
        // resetGame(cash)
    }
    
}

function playersTurn(){
    let playerHandSum = 0;
    let card1 = dealCards(); // 4 declares a random index of deckObject to this variable
    flipCardUp(playerCard1, card1); // line 185 and 187 loads the first two cards when game begins.
    let card2 = dealCards(); // 
    flipCardUp(playerCard2, card2);
    playerHandSum = card1.value + card2.value
    // check(playerHandSum, 2)
    // let card3 = dealCards(); // 
    // flipCardUp(playerCard3, card3);
    // playerHandSum = card3.value + playerHandSum
    // check(playerHandSum, 3)
    // let card4 = dealCards(); // 
    // flipCardUp(playerCard4, card4);
    // playerHandSum = card4.value + playerHandSum
    // check(playerHandSum, 4)
    // let card5 = dealCards(); // 
    // flipCardUp(playerCard5, card5);
    // playerHandSum = card5.value + playerHandSum
    // check(playerHandSum, 5)
    
}
function resetGame(cash){ 

    // playerCard3.style.backgroundImage =  `url('img/facedowncard.png')`;
    // playerCard4.style.backgroundImage =  `url('img/facedowncard.png')`;
    // playerCard5.style.backgroundImage =  `url('img/facedowncard.png')`;
    // dealerCard1.style.backgroundImage =  `url('img/facedowncard.png')`;
    // dealerCard2.style.backgroundImage =  `url('img/facedowncard.png')`;
    // dealerCard3.style.backgroundImage =  `url('img/facedowncard.png')`;
    // dealerCard4.style.backgroundImage =  `url('img/facedowncard.png')`;
    // dealerCard5.style.backgroundImage =  `url('img/facedowncard.png')`;
    for(let i = 0; i < hideButton.length; i++){
        hideButton[i].style.display = 'inline-block';
    }
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


async function dealersTurn(){
    console.log('Dealers')
    let playerCash = stay();
    for(let i = 0; i < hideButton.length; i++){
        hideButton[i].style.display = 'none';
    }
    let playerHand = 0;
    for(let i = 0; i < playerHandArray.length; i++){
        playerHand += playerHandArray[i].value
    }
    let card1 = await dealCards();
    let card2 = await dealCards();
    console.log('dealt card1: ' + card1)
    console.log('dealt card2: ' + card2)
    dealerHandSum =  card1.value + card2.value; 
    console.log('dealer sum: ' + dealerHandSum)
    await flipCardUp(dealerCard1, card1)
    await flipCardUp(dealerCard2, card2)
    let card3 = await dealCards();
    console.log('dealt card3: ' + card3)
    flipCardUp(dealerCard3, card3)
    dealerHandSum = card3 + dealerHandSum;
    console.log('dealer sum: ' + dealerHandSum)
    dealerCheck(playerHand,dealerHandSum)
    let card4 = await dealCards();
    console.log('dealt card4: ' + card4)
    flipCardUp(dealerCard4, card4)
    // dealerHandSum = card4 + dealerHandSum
    // dealerCheck(playerHand,dealerHandSum)
    // // dealerCard1.style.backgroundImage = `url('${card1.img}')`;
    // // dealerCard2.style.backgroundImage = `url('${card2.img}')`;
    // 
    // dealerHandSum = card3.value + dealerHandSum;
    // await flipCardUp(dealerCard3, card3)
    // await dealerCheck(playerHand, dealerHandSum)
    // // dealerCard3.style.backgroundImage = `url('${card3.img}')`;
    // let card4 = await dealerCheck(dealerHandSum, playerHand);
    // dealerHandSum = card4.value + dealerHandSum 
    // await flipCardUp(dealerCard4, card4)
    // await dealerCheck(playerHand, dealerHandSum)
    // // dealerCard4.style.backgroundImage = `url('${card4.img}')`;
    // let card5 = await dealerCheck(dealerHandSum, playerHand);
    // dealerHandSum = card5.value + dealerHandSum
    // await flipCardUp(dealerCard5, card5)
    // await dealerCheck(playerHand, dealerHandSum)
    // dealerCard5.style.backgroundImage = `url('${card5.img}')`;

    // if(dealerHandSum < playerHand ){
    // card3 = dealCards();
    // dealerHandSum = card3.value + dealerHandSum; 
    // dealerCard3.style.backgroundImage = `url('${card3.img}')`
    //     if(dealerHandSum <= playerHand){
    //         card4 = dealCards();
    //         dealerHandSum = card4.value + dealerHandSum; 
    //         dealerCard4.style.backgroundImage = `url('${card4.img}')`
    //         if(dealerHandSum <= playerHand){
    //             card5 = dealCards();
    //             dealerHandSum = card5.value + dealerHandSum; 
    //             dealerCard4.style.backgroundImage = `url('${card5.img}')`
    //             if(dealerHandSum <= 21){
    //                 alert('dealer Wins 5 cards')
    //             }
    //             else if(dealerHandSum > 21){
    //                 alert('busted')
    //             }
    //         }
    //         else if(dealerHandSum > playerHand || dealerHandSum == 21){
    //             alert('dealer wins')
    //         }
    //     }
    //     else if(dealerHandSum > playerHand || dealerHandSum == 21){
    //         alert('dealer wins')
    //     }
    // }
    // else if(dealerHandSum > playerHand){
    //     alert('dealer wins')
    // }
  

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