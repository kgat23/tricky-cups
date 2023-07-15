var cup1 = document.getElementById('cup1');
var cup2 = document.getElementById('cup2');
var cup3 = document.getElementById('cup3');
var ball = document.getElementById('ball');
var positionQueue = [];

function moveCupToPosition(cup, x, y) {

    // Add the target position to the queue
    positionQueue.push({ x: x, y: y });

    // If this is the only position in the queue, start the animation
    if (positionQueue.length === 1) {
        animateNextPosition();
    }

    function animateNextPosition() {
        if (positionQueue.length > 0) {
            var nextPosition = positionQueue[0];

            // Move the cup to the next position
            cup.style.top = nextPosition.y + 'px';
            cup.style.left = nextPosition.x + 'px';

            // Wait for the animation to finish, then hide the ball
            setTimeout(function() {
                ball.style.display = 'none';

                // Remove the processed position from the queue
                positionQueue.shift();

                // Continue to the next position in the queue
                animateNextPosition();
            }, 1000); // Adjust the time delay (in milliseconds) to match the transition duration
        }
    }
}

document.getElementById('startButton').addEventListener('click', function() {
    // Example usage: Move the cup to different positions
    // moveCupToPosition(cup1,400, 500);
    // moveCupToPosition(cup1,600, 700);
    // moveCupToPosition(cup1,300, 200);
});