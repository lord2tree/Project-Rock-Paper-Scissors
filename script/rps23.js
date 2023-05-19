function getComputerChoice() {
  let randomSelection = Math.floor(Math.random() * 10);
  //console.log(randomSelection);
  if (randomSelection >= 0 && randomSelection <= 2.99) {
    return "Rock";
  } else if (randomSelection >= 3 && randomSelection <= 5.99) {
    return "Paper";
  } else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  let validChoices = ["rock", "paper", "scissors"];
  let storedPlayerSelection = playerSelection.toLowerCase();
  let storedComputerSelection = computerSelection.toLowerCase();
  if (!validChoices.includes(storedPlayerSelection)) {
    return "Invalid selection, please choose either rock, paper or scissors";
  }
  if (storedPlayerSelection == storedComputerSelection) {
    alert("Draw!");
    return "Draw!";
  } else if (
    (storedPlayerSelection == "rock" &&
      storedComputerSelection == "scissors") ||
    (storedPlayerSelection == "paper" && storedComputerSelection == "rock") ||
    (storedPlayerSelection == "scissors" && storedComputerSelection == "paper")
  ) {
    alert("You Won!");
    return "You Won!";
  } else alert("You Lost!");
  return "You Lost!";
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore < 3 || computerScore < 3) {
    let playerSelection = prompt(
      "Enter your choice. (rock, paper, or scissors)"
    );
    let computerSelection = getComputerChoice();
    let results = playRound(playerSelection, computerSelection);
    if (results == "You Won!") {
      playerScore++;
    } else if (results == "You Lost!") {
      computerScore++;
    }
    if (playerScore == 3) {
      alert("You won the game!");
      return "You won the game!";
    } else if (computerScore == 3) {
      alert("You lost the game!");
      return "You lost the game!";
    }
  }
}
