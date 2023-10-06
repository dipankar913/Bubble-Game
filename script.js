//making Bubble
const createBubble = () => {
  var clutter = "";

  for (var i = 1; i <= 207; i++) {
    var random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}
     </div>`;
  }
  document.querySelector("#pannel-buttom").innerHTML = clutter;

  // console.log(clutter);
};
createBubble();

//Timer
var timer = 60;
const runTimer = () => {
  var timerinterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(timerinterval);
      document.querySelector("#pannel-buttom").innerHTML = `<div class = "overMsg"><h1>Game Over</h1>\n<h2>Your Score = ${score}</h2></div>`;
    }
  }, 1000);
};
runTimer();

//Hit
var hitRandom= 0;
const gethitValue = () =>{
    hitRandom = Math.floor(Math.random() * 10);
    document.querySelector("#hitValue").textContent = hitRandom;
}
gethitValue();

//score
var score = 0;
const increaseScore = () =>{
    score +=10;
    document.querySelector("#scoreValue").textContent = score;
}

document.querySelector("#pannel-buttom").addEventListener("click", (details) =>{
//get the value of clicked button number and covert the string to number with the help of Number()
var clickedNum = Number(details.target.textContent);
if(clickedNum === hitRandom){
    increaseScore();
    createBubble();
    gethitValue();
}
});





