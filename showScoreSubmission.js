function showScoreSubmission() {
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

    var form = document.createElement('form');
    form.id = 'scoreForm';
    form.style.backgroundColor = '#fff';
    form.style.padding = '20px';
    form.style.borderRadius = '5px';
    form.style.textAlign = 'center';
    form.style.opacity = '0';
    form.style.transform = 'scale(0.8)';
    form.style.transition = 'opacity 0.3s, transform 0.3s';

    var nameLabel = document.createElement('label');
    nameLabel.textContent = 'Enter your name:';
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'nameInput';

    var scoreLabel = document.createElement('label');
    scoreLabel.textContent = 'Your score:';
    var scoreInput = document.createElement('span');
    scoreInput.id = 'scoreInput';
    scoreInput.textContent = clickCount;

    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    form.appendChild(nameLabel);
    form.appendChild(document.createElement('br'));
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(scoreLabel);
    form.appendChild(document.createElement('br'));
    form.appendChild(scoreInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);

    overlay.appendChild(form);

    document.body.appendChild(overlay);

    setTimeout(function() {
        form.style.opacity = '1';
        form.style.transform = 'scale(1)';
    }, 100);

    form.addEventListener('submit', handleScoreSubmission);
}

function handleScoreSubmission(event) {
    event.preventDefault();
    var nameInput = document.getElementById('nameInput');

    var playerName = nameInput.value;
    var playerScore = clickCount;

    // Implement the logic to submit the score to your leaderboard here
    // You can make an API call to your backend or AWS Lambda function
    // to update the leaderboard with the player's score and name.

    // Example code for submitting the score:
    console.log('Submitting score:', playerName, playerScore);

    // Call script to display leaderboard
    showLeaderboard();

    // Remove the overlay
    var overlay = document.getElementById('overlay');
    overlay.parentNode.removeChild(overlay);
}