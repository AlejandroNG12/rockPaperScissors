const rockWin = "Rock beats Scissors";
const paperWin = "Paper beats Rock";
const scissorsWin = "Scissors beats paper";
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let gamesCount = 0;
function getComputerChoice(){
    let value = Math.floor(Math.random() * 3);
    console.log(value);
    if (value === 0) return "rock";
    else if (value === 1) return "paper";
    else if (value === 2) return "scissors";
}
function playOneRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === rock && computerSelection === rock){
        return "You have tied!";
    }
    else if(playerSelection === rock && computerSelection === paper){
        return "You lose! ".concat(paperWin);
    }
    else if(playerSelection === rock && computerSelection === scissors){
        return "You win! ".concat(rockWin);
    }
    else if(playerSelection === paper && computerSelection === rock){
        return "You win! ".concat(paperWin);
    }
    else if(playerSelection === paper && computerSelection === paper){
        return "You have tied!";
    }
    else if(playerSelection === paper && computerSelection === scissors){
        return "You lose! ".concat(rockWin);
    }
    else if(playerSelection === scissors && computerSelection === rock){
        return "You lose! ".concat(rockWin);
    }
    else if(playerSelection === scissors && computerSelection === paper){
        return "You win! ".concat(scissorsWin);
    }
    else if(playerSelection === scissors && computerSelection === scissors){
        return "You have tied!";
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
playGame();