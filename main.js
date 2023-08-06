const possibleChoices = document.querySelectorAll('button')
let userChoice;
let computerChoice;
let result
let playerScore = 0
let botScore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e)=>{
    userChoice= e.target.id
    showChoices()
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 +1)
    
    switch(randomNumber){
        case 1 : computerChoice='rock';break;
        case 2 : computerChoice='paper';break;
        case 3 : computerChoice='scissors';break;
    }
    showChoices()
}

function getResult(){
    
    if(computerChoice===userChoice){
        result= 'its a draw'
    }
    if(
        (userChoice==='rock'&&computerChoice=='scissors')||
        (userChoice==='paper'&&computerChoice=='rock')||
        (userChoice==='scissors'&&computerChoice=='paper')
    ){
        result=  'You win!'
        playerScore+=1
    }
    if(
        (userChoice==='rock'&&computerChoice=='paper')||
        (userChoice==='paper'&&computerChoice=='scissors')||
        (userChoice==='scissors'&&computerChoice=='rock')
    ){
        result= 'You lost!'
        botScore+=1
    }
    
    document.getElementById("result").innerHTML = result;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("botScore").innerHTML = botScore;
}
function reset(){
    playerScore = 0
    botScore = 0
    document.getElementById("playerScore").innerHTML = 0
    document.getElementById("botScore").innerHTML = 0
    document.getElementById("userChoice").innerHTML = "You"
    document.getElementById("computerChoice").innerHTML = "AI"
    document.getElementById("result").innerHTML = "Choose Your Hand"
}
function showChoices(){
    switch(userChoice){
        case 'rock': document.getElementById("userChoice").innerHTML = '✊';break;
        case 'paper': document.getElementById("userChoice").innerHTML = '✋';break;
        case 'scissors': document.getElementById("userChoice").innerHTML = '✂️';
    }
    switch(computerChoice){
        case 'rock': document.getElementById("computerChoice").innerHTML = '✊';break;
        case 'paper': document.getElementById("computerChoice").innerHTML = '✋';break;
        case 'scissors': document.getElementById("computerChoice").innerHTML = '✂️';
    }
}