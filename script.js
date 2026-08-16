function addPoints(team, points) {
  const scoreElement = document.getElementById(`${team}-score`);
  const currentScore = parseInt(scoreElement.textContent);
  const newScore = currentScore + points;
  scoreElement.textContent = newScore;
}

function resetScores() {
  const homeScoreElement = document.getElementById('home-score');
  const guestScoreElement = document.getElementById('guest-score');
  homeScoreElement.textContent = '0';
  guestScoreElement.textContent = '0';
}