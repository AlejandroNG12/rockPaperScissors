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
const result = document.querySelector("#result");
const player_div = document.querySelector("#player_choice");
const computer_div = document.querySelector("#computer_choice");
const player_points = document.querySelector("#player_points");
const computer_points = document.querySelector("#computer_points");

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
        result.textContent = "You have tied!";
        showChoices(ROCK,ROCK);
    }
    else if(playerSelection === ROCK && computerSelection === PAPER){
        result.textContent = "You lose! ".concat(paperWin);
        computerWins++;
        showChoices(ROCK,PAPER);
    }
    else if(playerSelection === ROCK && computerSelection === SCISSORS){
        result.textContent = "You win! ".concat(rockWin);
        playerWins++;
        showChoices(ROCK,SCISSORS);
    }
    else if(playerSelection === PAPER && computerSelection === ROCK){
        result.textContent = "You win! ".concat(paperWin);
        playerWins++;
        showChoices(PAPER,ROCK);
    }
    else if(playerSelection === PAPER && computerSelection === PAPER){
        result.textContent = "You have tied!";
        showChoices(PAPER,PAPER);
    }
    else if(playerSelection === PAPER && computerSelection === SCISSORS){
        result.textContent = "You lose! ".concat(scissorsWin);
        computerWins++;
        showChoices(PAPER,SCISSORS);
    }
    else if(playerSelection === SCISSORS && computerSelection === ROCK){
        result.textContent = "You lose! ".concat(rockWin);
        computerWins++;
        showChoices(SCISSORS,ROCK);
    }
    else if(playerSelection === SCISSORS && computerSelection === PAPER){
        result.textContent = "You win! ".concat(scissorsWin);
        playerWins++;
        showChoices(SCISSORS,PAPER);
    }
    else if(playerSelection === SCISSORS && computerSelection === SCISSORS){
        result.textContent = "You have tied!";
        showChoices(SCISSORS,SCISSORS);
    }
    gamesCount++;
    player_points.textContent = playerWins;
    computer_points.textContent = computerWins;
    if (gamesCount === 5) {
        showWinner();

    }

    
}
function showChoices(pChoice, cChoice){
    if(pChoice === ROCK && cChoice === ROCK){
        player_div.textContent =  "\uD83E\uDEA8";
        computer_div.textContent = "\uD83E\uDEA8";
    }else if(pChoice === ROCK && cChoice === PAPER){
        player_div.textContent =  "\uD83E\uDEA8";
        computer_div.textContent = "\uD83E\uDDFB";
    }else if(pChoice === ROCK && cChoice === SCISSORS){
        player_div.textContent =  "\uD83E\uDEA8";
        computer_div.textContent = "\u2702\uFE0F";
    }else if(pChoice === PAPER && cChoice === ROCK){
        player_div.textContent =  "\uD83E\uDDFB";
        computer_div.textContent = "\uD83E\uDEA8";
    }else if(pChoice === PAPER && cChoice === PAPER){
        player_div.textContent =  "\uD83E\uDDFB";
        computer_div.textContent = "\uD83E\uDDFB";
    }else if(pChoice === PAPER && cChoice === SCISSORS){
        player_div.textContent =  "\uD83E\uDDFB";
        computer_div.textContent = "\u2702\uFE0F";
    }else if(pChoice === SCISSORS && cChoice === ROCK){
        player_div.textContent =  "\u2702\uFE0F";
        computer_div.textContent = "\uD83E\uDEA8";
    }else if(pChoice === SCISSORS && cChoice === PAPER){
        player_div.textContent =  "\u2702\uFE0F";
        computer_div.textContent = "\uD83E\uDDFB";
    }else if(pChoice === SCISSORS && cChoice === SCISSORS){
        player_div.textContent =  "\u2702\uFE0F";
        computer_div.textContent = "\u2702\uFE0F";
    }
}
function showWinner(){
    if(playerWins > computerWins) {
        result.textContent = "You win. Congratulation! 🎉";
    }
    else if(computerWins > playerWins){
        result.textContent = "You lose. A computer is better than you hahaha";
    }
    else 
        result.textContent = "Wow, you tied!"
}

function askPlayAgain(){
    let response = prompt("Do you want to play again? (Yes/No)");
    response = response.toLowerCase();
    if(response === "yes") gamesCount = 0;
}
//console.log(computerSelection);
//console.log(playOneRound(playerSelection,computerSelection));
