var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1 + 1);

document.querySelector(".img1").src = "images/dice"+ randomNumber1 +".png";

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2 + 1);

document.querySelector(".img2").src = "images/dice"+ randomNumber2 +".png";

if (randomNumber1 > randomNumber2){
  document.querySelector(".refresh").innerHTML = "🚩 Player 1 won!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".refresh").innerHTML = "Player 2 won! 🚩";
} else{
  document.querySelector(".refresh").innerHTML = "Draw";
}
