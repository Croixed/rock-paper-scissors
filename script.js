const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';


function computerPlay () {
  //return R, P, or S
  return returnHand()
}

function humanPlay () {
  let result = prompt("Enter Rock/Paper/Scissors: ");
  resultLower = result.toLowerCase();
  if (resultLower === 'rock' || resultLower === 'paper' || resultLower === 'scissors') {
    return resultLower
  } else {
    console.log('try again');
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

function rpsSub(pSel, cSel, hand, beats, losesTo) {
  if (pSel === hand) {
    if (cSel === beats) {
      return `you win, ${pSel} beats ${cSel}`
    } else if (cSel === losesTo) {
      return `you lose, ${cSel} beats ${pSel}`
    } else {
      return `you tied, you both picked ${pSel}`
    }
  }
}

function playRound2(playerSelection, computerSelection) {
  if (playerSelection === ROCK) {
    return returnWinner(playerSelection, computerSelection, SCISSORS, PAPER);
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



//let playerHand = humanPlay();
//let compHand = computerPlay();

//playRound(playerHand, compHand);