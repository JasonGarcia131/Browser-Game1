let deckObject = [
    {
        img: './img/aceHeart.png',
        value: 1
    },
    {
        img: './img/aceDiamonds.png',
        value: 1
    },
    {
        img: './img/aceClubs.png',
        value: 1
    },
    {
        img: './img/aceSpades.png',
        value: 1
    }
    ,
    {
        img: './img/twoHearts.png',
        value: 2
    },
    {
        img: './img/twoDiamonds.png',
        value: 2
    },
    {
        img: './img/twoClubs.png',
        value: 2
    },
    {
        img: './img/twoSpades.png',
        value: 2
    },
    {
        img: './img/threeHearts.png', 
        value: 3
    },
    {
        img: './img/threeDiamonds.png',
        value: 3
    },
    {
        img: './img/threeClubs.png',
        value: 3
    },
    {
        img: './img/threeSpades.png',
        value: 3
    },
    {
        img: './img/fourHearts.png',
        value: 4
    },
    {
        img: './img/fourDiamonds.png',
        value: 4
    },
    {
        img: './img/fourClubs.png',
        value: 4
    },
    {
        img: './img/fourSpades.png',
        value: 4
    },
    {
        img: './img/fiveHearts.png',
        value: 5
    },
    {
        img: './img/fiveDiamonds.png',
        value: 5
    },
    {
        img: './img/fiveClubs.png',
        value: 5
    },
    {
        img: './img/fiveSpades.png',
        value: 5
    },
    {
        img: './img/sixHearts.png',
        value: 6
    },
    {
        img: './img/sixDiamond.png',
        value: 6
    },
    {
        img: './img/sixClubs.png',
        value: 6
    },
    {
        img: './img/sixSpades.png',
        value: 6
    },
    {
        img: './img/sevenHearts.png',
        value: 7
    },
    {
        img: './img/sevenDiamonds.png',
        value: 7
    },
    {
        img: './img/sevenClubs.png',
        value: 7
    },
    {
        img: './img/sevenSpades.png',
        value: 7
    },
    {
        img: './img/eightHearts.png',
        value: 8
    },
    {
        img: './img/eightDiamonds.png',
        value: 8
    },
    {
        img: './img/eightClubs.png',
        value: 8
    },
    {
        img: './img/eightSpades.png',
        value: 8
    },
    {
        img: './img/nineHearts.png',
        value: 9
    },
    {
        img: './img/nineDiamonds.png',
        value: 9
    },
    {
        img: './img/nineClubs.png',
        value: 9
    },
    {
        img: './img/nineSpades.png',
        value: 9
    },
    {
        img: './img/tenHearts.png',
        value: 10
    },
    {
        img: './img/tenDiamonds.png',
        value: 10
    },
    {
        img: './img/tenClubs.png',
        value: 10
    },
    {
        img: './img/tenSpades.png',
        value: 10
    },
    {
        img: './img/jHearts.png',
        value: 10
    },
    {
        img: './img/jDiamonds.png',
        value: 10
    },
    {
        img: './img/jClubs.png',
        value: 10
    },
    {
        img: './img/jSpades.png',
        value: 10
    },
    {
        img: './img/qHearts.png',
        value: 10
    },
    {
        img: './img/qDiamonds.png',
        value: 10
    },
    {
        img: './img/qClubs.png',
        value: 10
    },
    {
        img: './img/qSpades.png',
        value: 10
    },
    {
        img: './img/kHearts.png',
        value: 10
    },
    {
        img: './img/kDiamond.png',
        value: 10
    },
    {
        img: './img/kClubs.png',
        value: 10
    },
    {
        img: './img/kSpades.png',
        value: 10
    }
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
let dealerWallet = document.querySelector('#dealerWallet')
let hitButton = document.querySelector('#hitButton');
let stayButton = document.querySelector('#stayButton');
let popUP = document.querySelector('#messagePopUp');
let message = document.createElement('p');
let popUPButton = document.querySelector('#tryAgain')
let playerHandArray = [];
let playerCash = 400;
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
    for(let i = 0; i < hideButton.length; i++){
        hideButton[i].style.display= 'inline-block';
    }
    playerHandArray = [] // Resets playerHandArray to an empty array for the next round.
    let card1 = dealCards(); // 4 declares a random index of deckObject to this variable
    flipCardUp(playerCard1, card1); // line 185 and 187 loads the first two cards when game begins.
    console.log('card 1: ' + card1.value)
    let card2 = dealCards(); // 
    flipCardUp(playerCard2, card2);
    console.log('card 2: ' + card2.value)
    playerHandArray.push(card1)
    playerHandArray.push(card2)
}

function dealCards(){
    let dealtCard = deckObject[Math.floor(Math.random()*deckObject.length)]; 
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

    // let initialHand = 0;
    // let newCard = 0;
    // let initialHand = playerHandSum();
    let newHand = 0;
    let newCard =  await dealCards();
    console.log('new card: '+ newCard.value);
    
    playerHandArray.push(newCard);
    console.log(playerHandArray);
    for(let i = 0 ; i < playerHandArray.length; i++){
       newHand += playerHandArray[i].value;
       console.log('Sum: '+ newHand)
    }
    if(playerHandArray.length == 3){
       playerCard3.style.backgroundImage = `url('${newCard.img}')` 
      
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

function tryAgain(){

    popUP.style.display = 'none';
    // if(cash >= 100){
        onStart();
       
    // }
    // else if(cash <= 0){
    //     alert('Not enough money');
    //     playerWallet.innerHTML = `Your Wallet: ${cash}`;
    //     // returnHome();
    // }

}

function check(hand, numOfCards){
    if(hand == 21){
        playerCash = playerCash + 100;
        playerWallet.innerHTML = `Your Wallet: ${playerCash}`;
        alert(playerCash);
        message.innerHTML = 'You win! line 316';
        message.style.textAlign='center';
        popUP.append(message)        
        popUP.style.display='inline-block';
    }
    else if(hand < 21 && numOfCards == 5){
        playerCash = playerCash + 100;
        playerWallet.innerHTML = `Your Wallet: ${playerCash}`;
        alert(playerCash);
        message.innerHTML = 'You win! line 326';
        message.style.textAlign='center';
        popUP.append(message);       
         popUP.style.display='inline-block';
    }
    else if (hand > 21){
        
        playerCash = playerCash - 100
        playerWallet.innerHTML = `Your Wallet: ${playerCash}`;
        alert(playerCash);
        message.innerHTML = 'You Lose! line 336';
        message.style.textAlign='center';
        popUP.append(message)       
        popUP.style.display='inline-block';
    }
    if(playerCash <= 0){
        message.innerHTML = 'Not enough money';
        message.style.textAlign='center';
        popUP.append(message);       
         popUP.style.display='inline-block';
         returnHome()
    }
    
}

function flipCardUp(cardDiv, card){
    cardDiv.style.backgroundImage = `url('${card.img}')`;
}

function flipCardDown(faceDownCard){
    faceDownCard.style.backgroundImage =  `url('img/facedowncard.png')`;
}
// function dealerCheck(playerHand,dealerHand){

//     //let cash = check()
//     // if(dealerHand <= playerHand){
//     //     let newCard = dealCards();
//     //     return newCard;
//     // }
//     if(dealerHand > playerHand || dealerHandSum == 21){
//         alert('dealer wins > player hand or == 21')
//         //cash = cash - 100;
//        // playerWallet.innerHTML = `update: ${cash}`
//         console.log('This is repeating')
        // resetGame()
//     }
//     // else if(dealerHand > 21){
//     //     alert('Dealer Loses')
//     //     cash = cash + 100;
//     //     playerWallet.innerHTML = `update: ${cash}`
//     //     resetGame(cash)
//     // }
    
// }

function playersTurn(){
    let playerHandSum = 0;
    let card1 = dealCards(); // 4 declares a random index of deckObject to this variable
    flipCardUp(playerCard1, card1); // line 185 and 187 loads the first two cards when game begins.
    console.log('card 1: ' + card1.value)
    let card2 = dealCards(); // 
    flipCardUp(playerCard2, card2);
    console.log('card 2: ' + card2.value)
    playerHandSum = card1.value + card2.value
    return playerHandSum;
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
// function resetGame(cash, dealerCash){ 


  
//  }

function resetGameDealer(cash){ 

    playerCard3.style.backgroundImage =  `url('img/facedowncard.png')`;
    playerCard4.style.backgroundImage =  `url('img/facedowncard.png')`;
    playerCard5.style.backgroundImage =  `url('img/facedowncard.png')`;
    dealerCard1.style.backgroundImage =  `url('img/facedowncard.png')`;
    dealerCard2.style.backgroundImage =  `url('img/facedowncard.png')`;
    dealerCard3.style.backgroundImage =  `url('img/facedowncard.png')`;
    dealerCard4.style.backgroundImage =  `url('img/facedowncard.png')`;
    dealerCard5.style.backgroundImage =  `url('img/facedowncard.png')`;
    for(let i = 0; i < hideButton.length; i++){
        hideButton[i].style.display= 'inline-block';
    }
    playerHandArray = [] // Resets playerHandArray to an empty array for the next round.
    if(cash >= 100){
        onStart(cash);
    }
    else if(cash <= 0){
        alert('Not enough money');
        message.innerHTML = 'Not Enough Money!';
        popUP.append(message)       
         dealerWallet.innerHTML = `Dealer Wallet: ${cash}`;
        returnHome();
    }
}

function returnHome(){

    window.location = 'index.html'

}

let dealerCash = 1000;
async function dealersTurn(){
    console.log('Dealers Turn-----------------------------------')
    for(let i = 0; i < hideButton.length; i++){
        hideButton[i].style.display= 'none';
    }
    let playerHand = 0;
    for(let i = 0; i < playerHandArray.length; i++){
        playerHand += playerHandArray[i].value
    }
    let card1 = await dealCards(); 
    let card2 = await dealCards();
    dealerHandSum =  card1.value + card2.value; 
    await flipCardUp(dealerCard1, card1);
    await flipCardUp(dealerCard2, card2);
    console.log('card 1 + card 2: '+ dealerHandSum)
    // await dealerCheck(playerHand, dealerHandSum);// end of card1 and card2 
    // console.log('dealt card1: ' + card1.value);
    // console.log('dealt card2: ' + card2.value);
    // console.log('dealer sum: ' + dealerHandSum);
    // let card3 = await dealCards();//beginning of card 3
    // dealerHandSum = card3.value + dealerHandSum;
    // await flipCardUp(dealerCard3, card3);
    // await dealerCheck(playerHand, dealerHandSum);
    // //console.log('dealt card3: ' + card3.value)
    // console.log('dealer sum: ' + dealerHandSum)
    // let card4 = dealCards() 
    // dealerHandSum = card4.value + dealerHandSum;
    // console.log('dealt card4: ' + card4.value)
    //  setTimeout(flipCardUp(dealerCard4, card4), 200)
    // await dealerCheck(playerHand,dealerHandSum)
    // console.log('dealer sum: ' + dealerHandSum)
    // let card5 = await dealCards() 
    // dealerHandSum = card5.value + dealerHandSum;
    // console.log('dealt card4: ' + card5.value)
    // setTimeout(flipCardUp(dealerCard5, card5), 200)
    // await dealerCheck(playerHand,dealerHandSum)
    // console.log('dealer sum: ' + dealerHandSum)
    // // dealerHandSum = card4 + dealerHandSum
    // // dealerCheck(playerHand,dealerHandSum)
    // // // dealerCard1.style.backgroundImage = `url('${card1.img}')`;
    // // // dealerCard2.style.backgroundImage = `url('${card2.img}')`;
    // // 
    // // dealerHandSum = card3.value + dealerHandSum;
    // // await flipCardUp(dealerCard3, card3)
    // // await dealerCheck(playerHand, dealerHandSum)
    // // // dealerCard3.style.backgroundImage = `url('${card3.img}')`;
    // // let card4 = await dealerCheck(dealerHandSum, playerHand);
    // // dealerHandSum = card4.value + dealerHandSum 
    // // await flipCardUp(dealerCard4, card4)
    // // await dealerCheck(playerHand, dealerHandSum)
    // // // dealerCard4.style.backgroundImage = `url('${card4.img}')`;
    // // let card5 = await dealerCheck(dealerHandSum, playerHand);
    // // dealerHandSum = card5.value + dealerHandSum
    // // await flipCardUp(dealerCard5, card5)
    // // await dealerCheck(playerHand, dealerHandSum)
    // // dealerCard5.style.backgroundImage = `url('${card5.img}')`;

    if(dealerHandSum < playerHand ){
    card3 = dealCards();
    dealerHandSum = card3.value + dealerHandSum; 
    console.log('card 1 + card 2 + card 3: '+ dealerHandSum)
    dealerCard3.style.backgroundImage = `url('${card3.img}')`
        if(dealerHandSum <= playerHand){
            card4 = dealCards();
            dealerHandSum = card4.value + dealerHandSum; 
            console.log('card 1 + card 2 + card 3 + card 4: '+dealerHandSum)
            dealerCard4.style.backgroundImage = `url('${card4.img}')`
            if(dealerHandSum <= playerHand){
                card5 = dealCards();
                dealerHandSum = card5.value + dealerHandSum; 
                console.log('card 1 + card 2 + card 3 + card 4 + card 5: '+dealerHandSum)
                dealerCard5.style.backgroundImage = `url('${card5.img}')`
                if(dealerHandSum <= 21){
                    console.log('dealer Wins 5 cards')
                    message.innerHTML = 'Dealer wins, you lose! line 531';
                    message.style.textAlign='center';
                    popUP.append(message);
                    popUP.style.display='inline-block';
                    dealerCash += 100;
                    dealerWallet.innerHTML = `Dealer Wallet: ${dealerCash}`
                    
                }
                else if(dealerHandSum > 21){
                    console.log('busted after 5th Card')
                    message.innerHTML = 'You win! Dealer busted line 542';
                    popUP.append(message);
                    popUP.style.display='inline-block';
                    dealerCash =- 100;
                    dealerWallet.innerHTML = `Dealer Wallet: ${dealerCash}`
                    // resetGame()
                }
            }
            else if(dealerHandSum > playerHand && dealerHandSum <= 21){
                console.log('dealer wins after 4th Card')
                message.innerHTML = 'You Lose! dealer wins line 550';
                message.style.textAlign='center';
                popUP.append(message);
                popUP.style.display='inline-block';
                dealerCash += 100;
                dealerWallet.innerHTML = `Dealer Wallet: ${dealerCash}`
                // resetGame()
            }
            else{
                console.log('busted at 4th!')
                message.innerHTML = 'You win! dealer Busted line 558';
                message.style.textAlign='center';
                popUP.append(message);
                popUP.style.display='inline-block';
                dealerCash -= 100;
                dealerWallet.innerHTML = `Dealer Wallet: ${dealerCash}`
                // resetGame()
            }
        }
        else if(dealerHandSum > playerHand && dealerHandSum <= 21){
            console.log('dealer wins after 3rd Card')
            message.innerHTML = 'You Lose! line 567';
            message.style.textAlign='center';
            popUP.append(message);
            popUP.style.display='inline-block';
            dealerCash += 100;
            dealerWallet.innerHTML = `Dealer Wallet: ${dealerCash}`
            // resetGame()
        }
        else{
            console.log('Busted at 3rd')
            message.innerHTML = 'You win! dealer busted line 575';
            message.style.textAlign='center';
            popUP.append(message);
            popUP.style.display='inline-block';
            dealerCash -= 100;
            dealerWallet.innerHTML = `Dealer Wallet: ${dealerCash}`
            //resetGame()
        }
    }
    else if(dealerHandSum > playerHand){
        console.log('dealer wins at initial')
        message.innerHTML = 'You lose! line 584';
        message.style.textAlign='center';
        popUP.append(message);
        popUP.style.display='inline-block';
        dealerCash += 100;
        dealerWallet.innerHTML = `Dealer Wallet: ${dealerCash}`
        //resetGame()
    }
    if(dealerCash == 0){
        returnHome()
    }
  

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

//deal first card
//deal second card
//sum two cards
//check if the dealer wins by having more than the player.
//if not then the dealer g