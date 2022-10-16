let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

console.log(generateTarget());

const compareGuesses = (userG, computerG, secretG) => {
    const humanGuess = Math.abs(secretG - userG);
    const computerGuess = Math.abs(secretG - computerG);
    if(humanGuess === computerGuess) {
        return true;
    }
    else if(humanGuess < computerGuess) {
        return true;
    }
    else {
        return false;
    }
}

const updateScore = (winner) => {
    if(winner === "human") {
        humanScore ++;
    }
    if(winner === "computer") {
        computerScore ++;
    }
}

const advanceRound = () => {
    currentRoundNumber ++;
}