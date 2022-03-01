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
let hitButton = document.querySelector('#hitButton');
let playerHandArray = []

// let cash = 1000;

function hideHomepage(){//1 this runs on start button

    let homepage = document.querySelector('#home-navigation')
    homepage.style.display = 'none';
    onStart()  // 2 this function gets invoked

}

function dealCards(){
    let dealtCard = deckObject[Math.floor(Math.random()*deckObject.length)] 
    console.log('dealt card: ' + dealtCard.value)   
    // let dealtCard = deckArray[Math.floor(Math.random()*deckArray.length)]  
    return dealtCard
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
    let newCard =  await dealCards()
    console.log('new card: ' + newCard.value)
    playerHandArray.push(newCard)
    console.log(playerHandArray)
       for(let i = 0 ; i < playerHandArray.length; i++){
       newHand += playerHandArray[i].value
     }
     if(newHand > 21){
        console.log('busted')
   }
     console.log(newHand)
}

// function stay(){

//     dealersTurn()

// 



   function onStart(){ //3 this function runs third
    let playerInitialCard1 = dealCards() // 4 invokes this function
    playerCard1.style.backgroundImage =`url('${playerInitialCard1.img}')`;
    let playerInitialCard2 = dealCards()// 5 invokes the same function
    playerCard2.style.backgroundImage = `url('${playerInitialCard2.img}')`;
    console.log('card1 value: ' +  + 'card2 Value: ' + playerInitialCard2.value)
    playerHandArray.push(playerInitialCard1)
    playerHandArray.push(playerInitialCard2)
    initialSum = playerInitialCard1.value + playerInitialCard2.value
    console.log(initialSum) 
    // if(initialSum == 21){
    //     endGame()
    // }
     // end of chain invokation 
}

function endGame(){ 

    let playerHandArray = []
    let

}






// On the page load, cards should be dealt
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
