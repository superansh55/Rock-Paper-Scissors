
let humanScore=0;
let computerScore=0;

function getComputerChoice() {
 const characters =["rock","paper","scissors"];
   let result = ' ';
   const charactersLength = characters.length;
   for ( let i = 0; i < 1; i++ ) {
       result += characters[(Math.floor(Math.random() * charactersLength))];
   }
   return result;
}

function getHumanChoice(){
 let input=prompt("enter your choice");
 let clean_input=input.toLowerCase();
   if(clean_input==="rock"){
     return "rock";
   }else if(clean_input==="paper"){
     return "paper";
   }else{
     return "scissors";
   }
}


function playRound(humanChoice, computerChoice) {
    function win(){
        humanScore++;
        return console.log("You win");
        
    }
    function lose(){
         computerScore++;
       return console.log("you Lose");
       
    }
   if(humanChoice==="rock" && computerChoice==="scissors"){
        return win();
        
   }if(humanChoice==="paper" && computerChoice==="rock"){
        return win();
        
   }if(humanChoice==="scissors" && computerChoice==="paper"){
        return win();
   }else if(humanChoice===computerChoice){
    return console.log("Its a Tie!")
   }
   else{
    return lose();
   }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);




