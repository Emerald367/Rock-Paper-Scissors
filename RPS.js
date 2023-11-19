const rpsList = [
       "Rock" ,
       "Paper" ,
       "Scissors" 
];
      


function computerChoice () {
   let randomNumber = Math.floor(Math.random()*rpsList.length);
   let randomString = rpsList[randomNumber];
   return randomString;
}
alert(computerChoice());