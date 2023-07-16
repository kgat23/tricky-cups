var cup1 = document.getElementById('cup1');
var cup2 = document.getElementById('cup2');
var cup3 = document.getElementById('cup3');
var ball = document.getElementById('ball');
var positionQueue = [];
var targetCup = cup1; // Assume initial target cup is cup1

function moveCupToPosition(cup, x, y) {
  // Add the target position to the queue
  positionQueue.push({ cup: cup, x: x, y: y });

  // If this is the only position in the queue, start the animation
  if (positionQueue.length === 1) {
    animateNextPosition();
  }

  function animateNextPosition() {
    if (positionQueue.length > 0) {
      var nextPosition = positionQueue[0];

      // Move the cup to the next position
      nextPosition.cup.style.top = nextPosition.y + 'px';
      nextPosition.cup.style.left = nextPosition.x + 'px';

      // Wait for the animation to finish
      setTimeout(function () {
        // Remove the processed position from the queue
        positionQueue.shift();

        // Continue to the next position in the queue
        animateNextPosition();
      }, 1000); // Adjust the time delay (in milliseconds) to match the transition duration
    }
  }
}

function handleCupClick(cup) {
  if (cup === targetCup) {
    alert('Congratulations! You found the ball!');
  } else {
    alert('Sorry! Try again.');
  }
}

document.getElementById('startButton').addEventListener('click', function () {
  // Hide the ball
  ball.style.display = 'none';

  // Change the cups' z-index and interchange their positions
  cup1.style.zIndex = 2;
  cup2.style.zIndex = 3;
  cup3.style.zIndex = 1;

  moveCupToPosition(cup1, 600, 250);
  moveCupToPosition(cup2, 800, 250);
  moveCupToPosition(cup3, 400, 250);
});

cup1.addEventListener('click', function () {
  handleCupClick(cup1);
});

cup2.addEventListener('click', function () {
  handleCupClick(cup2);
});

cup3.addEventListener('click', function () {
  handleCupClick(cup3);
});
