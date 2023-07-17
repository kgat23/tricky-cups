var cup1 = document.getElementById('cup1');
var cup2 = document.getElementById('cup2');
var cup3 = document.getElementById('cup3');
var ball = document.getElementById('ball');
const detailsOfCups = [cup1,cup2,cup3];
let level = 1;

function moveCup(cup, x){
  cup.style.left = x+'px';
}

function shuffleArray(array) {
  const array1 = [...array]; // Create a copy of the original array
  const n = array.length;
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  if (isArraysEqual(array, array1)) {
    return shuffleArray(array); // Shuffle again if the array is the same
  }
  return array;
}

function isArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


function getPosition(array){
  for(let i=0;i<3;i++){
    if(array[i] === cup1){
      return i;
    }
  }
}


function rotateCups(){
  for(let i=0;i<level;i++){
      setTimeout(function(){
      const shuffledDetails = shuffleArray(detailsOfCups);
    // console.log(shuffledDetails);
      moveCup(shuffledDetails[0],400);
      moveCup(shuffledDetails[1],600);
      moveCup(shuffledDetails[2],800);
      let x = getPosition(shuffledDetails);
      ball.style.left = (422 + x*200)+'px';
    },2000+i*(1000-100*level));
  }
  
  
  // setTimeout(function(){
  //   for(let i=0;i<3;i++){
  //     ball.style.display = 'block';
  //     detailsOfCups[i].style.opacity = 0.5;
  //   }
  // },3000);
}

// function playNextLevel(level){
//   playGame();
// }

function handleCupClick() {
  if (this === cup1) {
    alert('Congratulations! You found the ball!');
    level++;
    // playNextLevel(level);
    if(level === 6){
      alert('Congratulations, you have completed the game. Click ok and then press start to start playing again.');
      location.reload();
    }
    playGame();
  } else {
    alert('Sorry! Try again.');
  }
}

function playGame(){
  setTimeout(function(){
    for(let i=0;i<3;i++){
      detailsOfCups[i].style.opacity = 0.5;
      ball.style.display = 'block';
    }
  },500);
  setTimeout(function(){
    for(let i=0;i<3;i++){
      detailsOfCups[i].style.opacity = 1;
    }
    ball.style.display = 'none';
  },1500);
  
  
  rotateCups();

  cup1.removeEventListener('click', handleCupClick);
  cup2.removeEventListener('click', handleCupClick);
  cup3.removeEventListener('click', handleCupClick);

  // cup1.addEventListener('click', function () {
  //   handleCupClick(cup1);
  // });
  
  // cup2.addEventListener('click', function () {
  //   handleCupClick(cup2);
  // });
  
  // cup3.addEventListener('click', function () {
  //   handleCupClick(cup3);
  // });
  cup1.addEventListener('click', handleCupClick);
  cup2.addEventListener('click', handleCupClick);
  cup3.addEventListener('click', handleCupClick);
}
