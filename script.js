const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';


function computerPlay () {
  //return R, P, or S
  return returnHand()
}

function humanPlay () {
  let result = prompt("Enter Rock/Paper/Scissors: ");
  return result.toLowerCase();
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

  //then compares their results and declares a winner
  //if ps === paper:
  //  if ...
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      return `you win, ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection === 'paper') {
      return `you lose, ${computerSelection} beats ${playerSelection}`
    } else {
      return `you tied, you both picked ${playerSelection}`
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return `you win, ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection === 'scissors') {
      return `you lose, ${computerSelection} beats ${playerSelection}`
    } else {
      return `you tied, you both picked ${playerSelection}`
    }
  } else if (playerSelection == 'scissors') { //could have used else instead of else if, but wanted to clarify
    if (computerSelection === 'paper') {
      return `you win, ${playerSelection} beats ${computerSelection}`
    } else if (computerSelection === 'rock') {
      return `you lose, ${computerSelection} beats ${playerSelection}`
    } else {
      return `you tied, you both picked ${playerSelection}`
    }
  }
}


//let playerHand = humanPlay();
//let compHand = computerPlay();

//playRound(playerHand, compHand);