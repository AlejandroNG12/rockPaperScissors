const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const rockWin = "Rock beats Scissors";
const paperWin = "Paper beats Rock";
const scissorsWin = "Scissors beats paper";

let gamesCount = 0;
let playerWins = 0;
let computerWins = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const div = document.querySelector("#result");

rockBtn.addEventListener("click",() => playOneRound(ROCK,getComputerChoice()));
paperBtn.addEventListener("click",() =>playOneRound(PAPER,getComputerChoice()));
scissorsBtn.addEventListener("click",() =>playOneRound(SCISSORS,getComputerChoice()));

function getComputerChoice(){
    let value = Math.floor(Math.random() * 3);
    if (value === 0) return "rock";
    else if (value === 1) return "paper";
    else if (value === 2) return "scissors";
}

function playOneRound(playerSelection, computerSelection){
    if(playerSelection === ROCK && computerSelection === ROCK){
        div.textContent = "You have tied!";
    }
    else if(playerSelection === ROCK && computerSelection === PAPER){
        div.textContent = "You lose! ".concat(paperWin);
        computerWins++;
    }
    else if(playerSelection === ROCK && computerSelection === SCISSORS){
        div.textContent = "You win! ".concat(rockWin);
        playerWins++;
    }
    else if(playerSelection === PAPER && computerSelection === ROCK){
        div.textContent = "You win! ".concat(paperWin);
        playerWins++;
    }
    else if(playerSelection === PAPER && computerSelection === PAPER){
        div.textContent = "You have tied!";
    }
    else if(playerSelection === PAPER && computerSelection === SCISSORS){
        div.textContent = "You lose! ".concat(rockWin);
        computerWins++;
    }
    else if(playerSelection === SCISSORS && computerSelection === ROCK){
        div.textContent = "You lose! ".concat(rockWin);
        computerWins++;
    }
    else if(playerSelection === SCISSORS && computerSelection === PAPER){
        div.textContent = "You win! ".concat(scissorsWin);
        playerWins++;
        
    }
    else if(playerSelection === SCISSORS && computerSelection === SCISSORS){
        div.textContent = "You have tied!";
    }
    gamesCount++;
    if (gamesCount === 5) {

    }

    
}
function playGame(){
    while (gamesCount<5){
        playerSelection = prompt("Rock, paper or scissors?");
        let cchoice = getComputerChoice();
        let round = playOneRound(playerSelection,cchoice);
        console.log(cchoice);
        console.log(round);
        gamesCount++;
        if (gamesCount === 5) askPlayAgain(); 
    }
}

function askPlayAgain(){
    let response = prompt("Do you want to play again? (Yes/No)");
    response = response.toLowerCase();
    if(response === "yes") gamesCount = 0;
}
//console.log(computerSelection);
//console.log(playOneRound(playerSelection,computerSelection));
