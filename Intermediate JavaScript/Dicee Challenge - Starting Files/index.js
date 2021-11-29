// Random Number
function randomNumber1() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min); }

function randomNumber2() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min); }

// Chainging Dices
function changeDice1() {
	var diceName = "images/dice" + randomNumber1() + ".png";
	document.querySelector(".img1").setAttribute("src", diceName);
}
changeDice1();

function changeDice2() {
	var diceName = "images/dice" + randomNumber2() + ".png";
	document.querySelector(".img2").setAttribute("src", diceName);
}
changeDice2();

// Changing Title

