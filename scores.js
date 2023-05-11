let scoreEl = document.getElementById("highscores");

//function to print highscores
function printHighscore() {
  var highscore = JSON.parse(window.localStorage.getItem(timeLeft));

  //print highscpres in descending order
  highscore.sort(function (a, b) {
    return b.score - a.score;
  });
  for (var i = 0; i < highscore.length; i += 1) {
    // create li tag for each high score
    var liTag = document.createElement("li");
    liTag.textContent = highscore[i].initials + " - " + highscore[i].score;

    //display on page
    scoreEl.textContent = timeLeft;
  }
}
//function to clear highscores
function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

printHighscore();
