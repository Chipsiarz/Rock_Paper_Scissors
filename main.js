const playerChoise = document.getElementById("playerChoise");
const computerChoise = document.getElementById("computerChoise");
const gameResult = document.getElementById("gameResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerChoise.textContent = `Player: ${player}`;
    computerChoise.textContent = `Computer: ${computer}`;
    gameResult.textContent = gameWinner();
  })
);

const computerTurn = () => {
  const number = Math.floor(Math.random() * 3) + 1;

  switch (number) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
};

const gameWinner = () => {
  if (player === computer) {
    return "Draw";
  } else if (computer === "Rock") {
    return player === "Paper" ? "Player Win" : "Computer Win";
  } else if (computer === "Paper") {
    return player === "Scissors" ? "Player Win" : "Computer Win";
  } else if (computer === "Scissors") {
    return player === "Rock" ? "Player Win" : "Computer Win";
  }
};
