// Random Number
function randomNumber1() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min); }

var player1Res = randomNumber1();

function randomNumber2() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min); }

var player2Res = randomNumber2();

// Chainging Dices
function changeDice1() {
	var diceName = "images/dice" + player1Res + ".png";
	document.querySelector(".img1").setAttribute("src", diceName);
}
changeDice1();

function changeDice2() {
	var diceName = "images/dice" + player2Res + ".png";
	document.querySelector(".img2").setAttribute("src", diceName);
}
changeDice2();

// Changing Title
if (player1Res > player2Res) {
	document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} 
else if (player1Res < player2Res) {
	document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
else {
	document.querySelector("h1").innerHTML = "Draw!";
}
