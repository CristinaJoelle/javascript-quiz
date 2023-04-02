const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

finalScore.innerText = mostRecentScore;

function saveHighscore() {
  var username = initialsEl.value.trim();

  if (username !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: time,
      initials: username,
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = "highscores.html";
  }
}
