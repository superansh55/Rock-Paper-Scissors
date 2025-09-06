const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const div = document.querySelector("div");
const ol = document.querySelector("ol");

let humanScore = 0;
let computerScore = 0;
const humanscr = document.querySelector("#hmnscr");
const compscr = document.querySelector("#cmpscr");
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanscr.textContent = humanScore;
    compscr.textContent = computerScore;
    ol.innerHTML = "";
}

function getComputerChoice() {
  const characters = ["rock", "paper", "scissors"];
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 1; i++) {
    result += characters[Math.floor(Math.random() * charactersLength)];
  }
  return result;
}
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  ol.appendChild(li);
  function win() {
    humanScore++;
    humanscr.textContent = humanScore;
    return (span.textContent = "You Win");
  }
  function lose() {
    computerScore++;
    compscr.textContent = computerScore;
    return (span.textContent = "You Lose");
  }
  if (humanChoice === "rock" && computerChoice === "scissors") {
     win();
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
     win();
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
     win();
  } else if (humanChoice === computerChoice) {
    return (span.textContent = "Tie");
  } else {
     lose();
  }
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      alert("You are the Winner!");
    } else if (computerScore > humanScore) {
      alert("The Computer is the Winner!");
    } else {
      alert("It's a Tie!");
    }
    resetGame();
  }
}
rockButton.addEventListener("click", () =>
  playRound("rock", getComputerChoice())
);
paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
scissorsButton.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
