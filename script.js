console.log("JS Loaded");
const gameBox = document.getElementById("gameBox");
const message = document.getElementById("message");
const result = document.getElementById("result");
const startBtn = document.getElementById("startBtn");

let startTime = 0;
let timeoutId = null;
let gameState = "idle"; 

startBtn.addEventListener("click", startGame);
gameBox.addEventListener("click", handleBoxClick);

function startGame(event) {
  event.stopPropagation();
  message.textContent = "Wait...";
  result.textContent = "";
  gameBox.style.backgroundColor = "#444";
  startBtn.disabled = true;
  gameState = "waiting";
  const randomDelay = Math.floor(Math.random() * 3000) + 2000;
  timeoutId = setTimeout(() => {
    message.textContent = "CLICK NOW";
    gameBox.style.backgroundColor = "green";
    startTime = Date.now();
    gameState = "active";
  }, randomDelay);
}

function handleBoxClick() {
  if (gameState === "waiting") {
    clearTimeout(timeoutId);
    message.textContent = "Too Soon! Wait for green.";
    gameBox.style.backgroundColor = "#444";
    startBtn.disabled = false;
    gameState = "idle";
    return;
  }

  if (gameState === "active") {
    const reactionTime = Date.now() - startTime;
    message.textContent = "Well done!";
    result.textContent = `Reaction Time: ${reactionTime} ms`;
    gameBox.style.backgroundColor = "#444";
    startBtn.disabled = false;
    gameState = "idle";
  }
}


