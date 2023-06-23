function showLeaderboard() {
    var overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';

    var leaderboard = document.createElement('div');
    leaderboard.id = 'leaderboard';
    leaderboard.style.backgroundColor = '#fff';
    leaderboard.style.padding = '20px';
    leaderboard.style.borderRadius = '5px';
    leaderboard.style.textAlign = 'center';
    leaderboard.style.opacity = '0';
    leaderboard.style.transform = 'scale(0.8)';
    leaderboard.style.transition = 'opacity 0.3s, transform 0.3s';

    var title = document.createElement('h2');
    title.textContent = 'Top 10 Scores';

    var scoresList = document.createElement('ul');
    scoresList.id = 'scoresList';

    // Simulated scores (replace with actual scores from DynamoDB in the future)
    var scores = [
        { name: 'Player 1', score: 100 },
        { name: 'Player 2', score: 90 },
        { name: 'Player 3', score: 80 },
        // ...add more scores here
    ];

    scores.forEach(function(score, index) {
        if (index < 10) {
            var listItem = document.createElement('li');
            listItem.textContent = score.name + ': ' + score.score;
            scoresList.appendChild(listItem);
        }
    });

    var retryButton = document.createElement('button');
    retryButton.textContent = 'Try Again';

    leaderboard.appendChild(title);
    leaderboard.appendChild(scoresList);
    leaderboard.appendChild(retryButton);

    overlay.appendChild(leaderboard);

    document.body.appendChild(overlay);

    setTimeout(function() {
        leaderboard.style.opacity = '1';
        leaderboard.style.transform = 'scale(1)';
    }, 100);

    retryButton.addEventListener('click', closeScoreSubmission);
}

function closeScoreSubmission() {
    var overlay = document.getElementById('overlay');
    overlay.parentNode.removeChild(overlay);

    // Reset variables and elements to their initial state
    timeLeft = 10;
    clickCount = 0;
    timerElement.textContent = timeLeft + ' seconds';
    clickCountElement.textContent = clickCount;
    clickButton.disabled = false;
    startButton.addEventListener('click', startGame);
    startButton.style.display = 'block'; // show the start button
    clickButton.style.display = 'none'; // hide the click button
}