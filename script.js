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



