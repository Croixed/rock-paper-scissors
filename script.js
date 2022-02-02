const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';


function computerPlay () {
  //return R, P, or S
  return returnHand()
}

function humanPlay () { // this is absolute garbage and should be rewritten 
  let result = prompt("Enter Rock/Paper/Scissors: ");
  resultLower = result.toLowerCase();
  if (resultLower === 'rock' || resultLower === 'paper' || resultLower === 'scissors') {
    return resultLower
  } else {
    console.log('wrong answer');
    //put code here to make the func start over 
  }
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
    return `you win, ${playerSelection} beats ${computerSelection}`
  } else if (computerSelection === losesTo) {
    return `you lose, ${computerSelection} beats ${playerSelection}`
  } else {
    return `you tied, you both picked ${playerSelection}`
  }
}

function game() {
  playerHand = humanPlay();
  computerHand = computerPlay();
  console.log(playRound(playerHand, computerHand));
}

// I don't know loops yet
game();
game();
game();
game();
game();