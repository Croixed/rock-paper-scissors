const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';


function computerPlay () { // technically not needed
  //return R, P, or S
  return returnHand()
}

function returnHand () {
  let result = Math.floor(Math.random() * 3);
  if (result === 0) {
    return ROCK
  } else if (result === 1) {
    return PAPER
  } else {
    return SCISSORS
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === ROCK) {
    return returnWinner(playerSelection, computerSelection, SCISSORS, PAPER); // I'm sure there's a better way than hardcoding the interactions by passing them in as args
  } else if (playerSelection === PAPER) {
    return returnWinner(playerSelection, computerSelection, ROCK, SCISSORS);
  } else {
    return returnWinner(playerSelection, computerSelection, PAPER, ROCK);
  }
}

function returnWinner(playerSelection, computerSelection, beats, losesTo) {
  if (computerSelection === beats) {
    humanScore += 1;
    return `you win, ${playerSelection} beats ${computerSelection}`
  } else if (computerSelection === losesTo) {
    computerScore += 1;
    return `you lose, ${computerSelection} beats ${playerSelection}`
  } else {
    return `you tied, you both picked ${playerSelection}`
  }
}

const scoreContainer = document.querySelector(".score-container");


function game(e) {
  playerHand = humanPlay(e);
  computerHand = computerPlay();
  //console.log(playRound(playerHand, computerHand));
  displayResults();
  updateScore();

  if (humanScore === 5 || computerScore === 5) {
    gameOver();
    updateScore();
  }

}

function gameOver() {
  if (humanScore > computerScore) {
    console.log('you won'); // todo: append a div instead of logging
  } else {
    console.log('you lost');
  }; 
  humanScore = 0;
  computerScore = 0;
  const divList = document.querySelectorAll('.last-round');
  console.log(divList);
  divList.forEach(scoreHistory => scoreContainer.removeChild(scoreHistory))

};

// I feel like using global vars are bad but I can't think of a better, simpler solution
let humanScore = 0;
let computerScore = 0;

function updateScore(){
  const scoreDiv = document.querySelector(".score-nums");
  //console.log(scoreDiv.textContent);
  scoreDiv.textContent = `You: ${humanScore} CPU-Sigma: ${computerScore}`;
};

function displayResults() {
  const resultDiv = document.createElement('div');
  resultDiv.classList.add("last-round")
  resultDiv.textContent = playRound(playerHand, computerHand);
  lastRound = document.querySelector('.last-round') // we set this here so the first last round is always the arg we pass in the next line
  scoreContainer.insertBefore(resultDiv, lastRound); //insertbefore adds to end for the first one, then adds the rest on top
}

//git push origin rps-ui

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener('click', game);
paperButton.addEventListener('click', game);
scissorsButton.addEventListener('click', game);

function humanPlay (input) {
  // returns a string of the text content of the event object
  return input.target.textContent
}