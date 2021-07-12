let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const getAbsoluteDistance = (x, y) => {
  return Math.abs(x-y);
}
const generateTarget = () => {
return Math.floor(Math.random() * 10);
}

const compareGuesses = (hGuess, cGuess, sTarget) => {
  if(hGuess < 0 || hGuess > 9){
    alert('number is out of range');
    return;
  }
  let target = generateTarget();
  console.log(target);
 if(getAbsoluteDistance(target, hGuess) < getAbsoluteDistance(target, cGuess)){
	return true;
}
else if(getAbsoluteDistance(target, hGuess) > getAbsoluteDistance(target, cGuess)){
return false;
  }
  else{
    return true;
  }

}

const updateScore = (winner) => {
  winner === 'human'
  ? humanScore++
  : computerScore++
}

const advanceRound = () => {
  currentRoundNumber++;
}