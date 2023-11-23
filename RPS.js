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
       const computerSelection = computerChoice(); 
        let result = playRound(USER_INPUT, computerSelection);
         switch (result) {
           case "Lose!":
             computerScore++;
             console.log("You've lost that Round!")
             break;
         
           case "Win!":
             playerScore++;
             console.log("You've won this Round!")
             break;
             }
         }
   
        if (computerScore > playerScore) {
            return "Computer has won!";
             

        } else if (playerScore > computerScore){
            return "Player has won!";
                
        } else {
            return "Tied Game!";
        }
     
}
console.log(game());