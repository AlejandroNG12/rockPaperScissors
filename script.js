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
const result_container = document.querySelector("#result_container");
let rst_button = undefined;

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
    result.style.background = null
}
function secCounter(second){
    result.textContent = second;
}
function showWinner(){

    if(playerWins > computerWins) {
        result.textContent = "You win. Congratulation! 🎉";
        result.style.background = "rgb(0,255,0)";

    }
    else if(computerWins > playerWins){
        result.textContent = "You lose. A computer is better than you hahaha";
        result.style.background = "rgb(255,0,0)";
    }
    else {
        result.textContent = "Wow, you tied!";
    }
    rst_button = document.createElement("button");
    rst_button.textContent = "NEW GAME";
    rst_button.addEventListener("click", () => resetGame ());
    result_container.appendChild(rst_button);    
}

function resetGame(){
    gamesCount = 0;
    player_div.textContent = "PLAYER";
    computer_div.textContent = "COMPUTER";
    player_points.textContent = "0";
    computer_points.textContent = "0";
    playerWins = 0;
    computerWins = 0;
    result_container.removeChild(rst_button);
    result.textContent = null;
}
