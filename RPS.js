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
    

    if (playerSelection.toLowerCase() === "Rock".toLowerCase() && computerSelection === "Paper") {
        return LOSING_STATEMENT;
    } else if (playerSelection.toLowerCase() === "Paper".toLowerCase() && computerSelection === "Scissors") {
        return LOSING_STATEMENT;
    } else if (playerSelection.toLowerCase() === "Scissors".toLowerCase() && computerSelection === "Rock") {
        return LOSING_STATEMENT;
    } else if (playerSelection.toLowerCase() === "Rock".toLowerCase() && computerSelection === "Scissors") {
        return WINNING_STATEMENT;
    } else if (playerSelection.toLowerCase() === "Paper".toLowerCase() && computerSelection === "Rock") {
        return WINNING_STATEMENT;
    } else if (playerSelection.toLowerCase() === "Scissors".toLowerCase() && computerSelection === "Paper") {
        return WINNING_STATEMENT;
    } else {
        return DRAW;
    }
          
}



 function game() {
     const USER_INPUT = prompt("Rock, Paper, Scissors, Shoot!");

}
