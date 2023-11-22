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
        return "Lose!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Lose!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "Lose!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Win!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Win!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Win!";
    } else {
        return "Tie!";
    }
          
}



 function game() {
     let playerScore = 0; 
     let computerScore = 0; 
     for (let i = 0; i < 5; i++) {
       const USER_INPUT = prompt("Rock, Paper, or Scissors?");
         switch (playRound()) {
           case "Lose!":
             playerScore++;
             console.log("You're Winning");
             break;
         
           case "Win!":
             computerScore++;
             console.log("You're losing");
             break;
   
          case computerScore > playerScore:
             console.log("Computer has won!");

          case playerScore > computerScore:
             console.log("Player has won!");   
     }  
     }
}

console.log(game())