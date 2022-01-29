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

  //takes two input functions
  //then compares their results and declares a winner
  //if 


}


let playerHand = humanPlay();
let compHand = computerPlay();

//playRound(playerHand, compHand);