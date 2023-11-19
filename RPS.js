const rpsList = [
       "Rock" ,
       "Paper" ,
       "Scissors" 
];
      


function computerChoice() {
   let randomNumber = Math.floor(Math.random()*rpsList.length);
   let randomString = rpsList[randomNumber];
   return randomString;
}


//CALL 1 Round of Rock, Paper, Scissors\\
//PARAMETERS for Player and Computer\\
//IF (certain outcome) THEN declare player winner or loser\\


function playRound(playerSelection, computerSelection) {
    const LOSING_STATEMENT = "You Lose!"
    const WINNING_STATEMENT = "You Win!"
    const DRAW = "Tie!"
    

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return LOSING_STATEMENT;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return LOSING_STATEMENT;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return LOSING_STATEMENT;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return WINNING_STATEMENT;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return WINNING_STATEMENT;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return WINNING_STATEMENT;
    } else {
        return DRAW;
    }
          
}

 const playerSelection = "Rock";
let computerSelection = computerChoice();
console.log(playRound(playerSelection, computerSelection));
