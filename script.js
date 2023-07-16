var cup1 = document.getElementById('cup1');
var cup2 = document.getElementById('cup2');
var cup3 = document.getElementById('cup3');
var ball = document.getElementById('ball');
const detailsOfCups = [cup1,cup2,cup3];

function moveCup(cup, x){
  cup.style.left = x+'px';
}

function shuffleArray(array) {
  const n = array.length;
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getPosition(array){
  for(let i=0;i<3;i++){
    if(array[i] === cup1){
      return i;
    }
  }
}


function rotateCups(){
  setTimeout(function(){
    const shuffledDetails = shuffleArray(detailsOfCups);
  // console.log(shuffledDetails);
  moveCup(shuffledDetails[0],400);
  moveCup(shuffledDetails[1],600);
  moveCup(shuffledDetails[2],800);
  let x = getPosition(shuffledDetails);
  ball.style.left = (422 + x*200)+'px';
  },2000);
  // setTimeout(function(){
  //   for(let i=0;i<3;i++){
  //     ball.style.display = 'block';
  //     detailsOfCups[i].style.opacity = 0.5;
  //   }
  // },3000);
}

function handleCupClick(cup) {
  if (cup === cup1) {
    alert('Congratulations! You found the ball!');
  } else {
    alert('Sorry! Try again.');
  }
}

function playGame(){
  setTimeout(function(){
    for(let i=0;i<3;i++){
      detailsOfCups[i].style.opacity = 0.5;
    }
  },500);
  setTimeout(function(){
    for(let i=0;i<3;i++){
      detailsOfCups[i].style.opacity = 1;
    }
    ball.style.display = 'none';
  },1500);
  
  rotateCups();
  cup1.addEventListener('click', function () {
    handleCupClick(cup1);
  });
  
  cup2.addEventListener('click', function () {
    handleCupClick(cup2);
  });
  
  cup3.addEventListener('click', function () {
    handleCupClick(cup3);
  });
}
