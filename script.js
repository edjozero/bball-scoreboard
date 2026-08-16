function addPoints(team, points) {
  const scoreElement = document.getElementById(`${team}-score`);
  const currentScore = parseInt(scoreElement.textContent);
  const newScore = currentScore + points;
  scoreElement.textContent = newScore;
}

