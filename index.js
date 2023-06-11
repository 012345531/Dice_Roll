var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png"

var randDiceImageSource1 = "images/" + randomDiceImage1;
var randDiceImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randDiceImageSource1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randDiceImageSource2);


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent="🚩Player 1 Wins !";
} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent="🚩Player 2 Wins !";
} else {
  document.querySelector("h1").textContent="It's a tie !!!";
}
