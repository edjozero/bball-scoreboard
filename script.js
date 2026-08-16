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

  // Reset the border styles by calling the function below
  currentLeader();
}

function currentLeader() {
  const homeScore = parseInt(document.getElementById('home-score').textContent);
  const guestScore = parseInt(document.getElementById('guest-score').textContent);
  
  const homeTeam = document.getElementById('home-score');
  const guestTeam = document.getElementById('guest-score');

  if (homeScore > guestScore) {
    homeTeam.style.border = '2px solid green';
    guestTeam.style.border = '2px solid red';
  } else if (guestScore > homeScore) {
    guestTeam.style.border = '2px solid green';
    homeTeam.style.border = '2px solid red';
  } else {
    homeTeam.style.border = 'none';
    guestTeam.style.border = 'none';
  }
}

// Add event listeners to update the leader after each score change
document.querySelectorAll('.pointsBtn').forEach(button => {
  button.addEventListener('click', currentLeader);
}); 