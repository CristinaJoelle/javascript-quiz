const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const highScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = highScore;

username.addEventListener("keyup", () => {
  console.log(initials.value);
});

saveHighScore = (e) => {
  console.log("clicked the save button!");
  e.preventDefault();
};
