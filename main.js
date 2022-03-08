let deckObject = [
    {   
       // name: 'ace',
        img: './img/aceHeart.png',
        value: 1
    },
    {
       // name: 'ace',
        img: './img/aceDiamonds.png',
        value: 1
    },
    {
       // name: 'ace',
        img: './img/aceClubs.png',
        value: 1
    },
    {
       // name: 'ace',
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
let playerCard1 = document.querySelector('#playersCard1'); // playerCard[x] and dealerCard[y] are the div containers that hold the card images
let playerCard2 = document.querySelector('#playersCard2');
let playerCard3 = document.querySelector('#playersCard3');
let playerCard4 = document.querySelector('#playersCard4');
let playerCard5 = document.querySelector('#playersCard5');
let dealerCard1 = document.querySelector('#dealersCard1');
let dealerCard2 = document.querySelector('#dealersCard2');
let dealerCard3 = document.querySelector('#dealersCard3');
let dealerCard4 = document.querySelector('#dealersCard4');
let dealerCard5 = document.querySelector('#dealersCard5');
let playerWallet = document.querySelector('#yourWallet'); // This value will keep track of the score in units of dollars.
let dealerWallet = document.querySelector('#dealerWallet');
let hitButton = document.querySelector('#hitButton');
let stayButton = document.querySelector('#stayButton');
let popUP = document.querySelector('#messagePopUp'); 
let message = document.createElement('p');
let tryAgainButton = document.querySelector('#tryAgain');
let playerHandArray = [];
let playerCash = 200;
let dealerCash = 200;
let dealerHandSum = 0;
let hideButton = document.querySelectorAll('.playerOptionButton');

//----------Attempted to give user option to choose the value of the ace----------------
// let acePopUp = document.createElement('div')
// let oneButton = document.createElement('button')
// oneButton.setAttribute('id', 'one')
// oneButton.innerText = '1';
// let elevenButton = document.createElement('button')
// elevenButton.setAttribute('id', 'eleven')
// elevenButton.innerText = '11';



function hideHomepage(){    //1. This function runs when user clicks start on the homepage.
    let homepage = document.querySelector('#home-navigation');
    homepage.style.display = 'none';
    onStart();  // 2. This function gets invoked.
}



function onStart(){ //3 this function runs third.
    popUP.style.display='none';
    playerWallet.innerHTML = `Your Wallet: $${playerCash}.00`;
    dealerWallet.innerHTML = `Dealer Wallet: $${dealerCash}.00`;
    if(playerCash <= 0){
        message.innerHTML = 'Not enough money';
        message.style.textAlign='center';
        popUP.append(message);     
        tryAgainButton.style.display = 'none';
        popUP.style.display='inline-block';
    }
    if(dealerCash <= 0){
        message.innerHTML = 'Dealer ran out of money! you win.';
        message.style.textAlign='center';
        popUP.append(message);     
        tryAgainButton.style.display = 'none';
        popUP.style.display='inline-block';
    }
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
    let card1 = dealCards(); // declares a random index of deckObject to this variable
    flipCardUp(playerCard1, card1);
    console.log('card 1: ' + card1.value)
    let card2 = dealCards(); 
    flipCardUp(playerCard2, card2);
    console.log('card 2: ' + card2.value)
    playerHandArray.push(card1.value)
    playerHandArray.push(card2.value)
}

function dealCards(){
    let dealtCard = deckObject[Math.floor(Math.random()*deckObject.length)]; 
    // if(dealtCard.name == 'ace'){
    //     acePopUp.style.width = '50%';
    //     acePopUp.style.background = 'orange';
    //     acePopUp.style.height = '250px';
    //     acePopUp.style.color = 'white';
    //    acePopUp.style.position = 'absolute';
    //    acePopUp.style.transform = 'translate(300px, -100px)';
    //    acePopUp.style.display = 'inline-block'
    //    acePopUp.style.textAlign = 'center';
    //     acePopUp.innerHTML = 'You got an Ace. Choose the value: ';
    //     document.body.append(acePopUp)
    //     acePopUp.append(oneButton)
    //     acePopUp.append(elevenButton)
    //     oneButton.addEventListener('click',()=>{
    //         acePopUp.style.display = 'none';
    //         console.log('1 clicked')
    //             dealtCard.value = 1
    //             return dealtCard;
    //     })
    //     elevenButton.addEventListener('click',()=>{
    //         dealtCard.value = 11
    //         acePopUp.style.display = 'none';
    //         console.log('2 clicked')
    //         return dealtCard;
    //     })
        
    //  }
    return dealtCard;
}

//------------Randomized dealers option for the value of the ace
// function dealCardsDealer(){
//     let dealtCard = deckObject[Math.floor(Math.random()*deckObject.length)]; 
//     if(dealtCard.name == 'ace'){
//         dealtCard.value = [1,11][Math.floor(Math.random()*2)]
//      }
//      return dealtCard
// }

async function hit(){
    let newHand = 0;
    let newCard =  await dealCards();
    console.log('new card: '+ newCard.value);
    playerHandArray.push(newCard.value);
     for(let i = 0 ; i < playerHandArray.length; i++){
      newHand += playerHandArray[i];
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

function Button(){
    for(let i = 0; i < hideButton.length; i++){
        hideButton[i].style.display= 'none';
    }
}


function popUpPomptWin(){
    Button()
    message.innerHTML = 'You win! line 316';
    message.style.textAlign='center';
    popUP.style.background = 'green';
    popUP.append(message)        
    popUP.style.display='inline-block';
}
function popUpPomptLose(){
    Button()
    message.innerHTML = 'You Lose!';
    message.style.textAlign='center';
    popUP.style.background = 'red';
    popUP.append(message)        
    popUP.style.display='inline-block';


}

function check(hand, numOfCards){
    if(hand == 21){
        playerCash = playerCash + 100; 
        dealerCash = dealerCash - 100;
       // onStart(playerCash)
        popUpPomptWin()
    }
    else if(hand < 21 && numOfCards == 5){
        playerCash = playerCash + 100;
        dealerCash = dealerCash - 100;
        //onStart(playerCash)
        popUpPomptWin()
    }
    else if (hand > 21){
        playerCash = playerCash - 100
        dealerCash = dealerCash + 100;
        //onStart(playerCash)
        popUpPomptLose()
    }
    
}

function flipCardUp(cardDiv, card){
    cardDiv.style.backgroundImage = `url('${card.img}')`;
}

function flipCardDown(faceDownCard){
    faceDownCard.style.backgroundImage =  `url('img/facedowncard.png')`;
}

// function playersTurn(){
//     let playerHandSum = 0;
//     let card1 = dealCards(); // 4 declares a random index of deckObject to this variable
//     flipCardUp(playerCard1, card1); // line 185 and 187 loads the first two cards when game begins.
//     console.log('card 1: ' + card1.value)
//     let card2 = dealCards(); // 
//     flipCardUp(playerCard2, card2);
//     console.log('card 2: ' + card2.value)
//     playerHandSum = card1.value + card2.value
//     return playerHandSum;
    
// }



function returnHome(){
    window.location = 'index.html'
}

async function dealersTurn(){
    console.log('Dealers Turn-----------------------------------')
    for(let i = 0; i < hideButton.length; i++){
        hideButton[i].style.display= 'none';
    }
    let playerHand = 0;
    for(let i = 0; i < playerHandArray.length; i++){
        playerHand += playerHandArray[i]
       }
    let card1 = await dealCards(); 
    let card2 = await dealCards();
    dealerHandSum =  card1.value + card2.value; 
    await flipCardUp(dealerCard1, card1);
    await flipCardUp(dealerCard2, card2);
    console.log('card 1 + card 2: '+ dealerHandSum)
    if(dealerHandSum <= playerHand ){
    card3 = dealCards();
    dealerHandSum = card3.value + dealerHandSum; 
    console.log('card 1 + card 2 + card 3: '+ dealerHandSum)
    setTimeout(()=>{dealerCard3.style.backgroundImage = `url('${card3.img}')`},2000)
        if(dealerHandSum <= playerHand){
            card4 = dealCards();
            dealerHandSum = card4.value + dealerHandSum; 
            console.log('card 1 + card 2 + card 3 + card 4: '+dealerHandSum)
            setTimeout(()=>{dealerCard4.style.backgroundImage = `url('${card4.img}')`}, 4000)
            if(dealerHandSum <= playerHand){
                card5 = dealCards();
                dealerHandSum = card5.value + dealerHandSum; 
                console.log('card 1 + card 2 + card 3 + card 4 + card 5: '+dealerHandSum)
               setTimeout(()=>{dealerCard5.style.backgroundImage = `url('${card5.img}')`},6000)
               if(dealerHandSum <= 21){
                    console.log('dealer Wins 5 cards')
                    setTimeout(()=>{ message.innerHTML = 'You lose! ';
                
                    message.style.textAlign='center';
                    popUP.append(message);
                    popUP.style.display='inline-block';}, 8000) 
                    playerCash -= 100;
                    dealerCash += 100;
                    
                }
                else if(dealerHandSum > 21){
                    console.log('busted after 5th Card')
                    setTimeout(()=>{message.innerHTML = 'You win! Dealer busted ';
                
                    popUP.style.background = 'green';
                    popUP.append(message);
                    popUP.style.display='inline-block';}, 8000)
                    playerCash += 100;
                    dealerCash =- 100;
                     
                }
            }
            else if(dealerHandSum > playerHand && dealerHandSum <= 21){
                console.log('dealer wins after 4th Card')
                setTimeout(()=>{ message.innerHTML = 'You Lose!';
            
                message.style.textAlign='center';
                popUP.style.background = 'red';
                popUP.append(message);
                popUP.style.display='inline-block';}, 6000)
                playerCash -= 100;
                dealerCash += 100;
                // resetGame()
            }
            else{

                console.log('busted at 4th!')
                setTimeout(()=>{message.innerHTML = 'You win!';
            
                popUP.style.background = 'green';
                message.style.textAlign='center';
                popUP.append(message);
                popUP.style.display='inline-block';}, 3000)
                playerCash += 100;
                dealerCash -= 100;

                // resetGame()
            }
        }
        else if(dealerHandSum > playerHand && dealerHandSum <= 21){
            console.log('dealer wins after 3rd Card')
            setTimeout(()=>{ message.innerHTML = 'You Lose!';
            message.style.textAlign='center';
            popUP.style.background = 'red';
            popUP.append(message);
            popUP.style.display='inline-block';}, 4000)
            playerCash -= 100;
            dealerCash += 100;
            // resetGame()
        }
        else{
            console.log('Busted at 3rd')
            
            setTimeout(()=>{ message.innerHTML = 'You win!';
            popUP.style.opacity = '.3';
            popUP.style.background = 'green';
            message.style.textAlign='center';
            popUP.append(message);
            popUP.style.display='inline-block';}, 3000)
           playerCash += 100;
            dealerCash -= 100;
            //resetGame()
        }
    }
    else if(dealerHandSum > playerHand){
        console.log('dealer wins at initial')
        
        setTimeout(()=>{message.innerHTML = 'You lose!';
        message.style.textAlign='center';
        popUP.style.background = 'red';
        popUP.append(message);
        popUP.style.display='inline-block';}, 2000)
        playerCash -= 100;
        dealerCash += 100;
        //resetGame()
    }
    // if(dealerCash <= 0){
    //     message.innerHTML = 'Dealer ran out of money! you win.';
    //     message.style.textAlign='center';
    //     popUP.append(message);     
    //     tryAgainButton.style.display = 'none';
    //     popUP.style.display='inline-block';
    // }

}

