

/* Random Number Generator */
var randomNumber1 = Math.floor((Math.random() * 6 )+ 1);
var randomDiceImage = "dice" + randomNumber1 + ".png"; //this line and the line below can be 1 line. refer to var randomImageSource2//
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0]; //this line and the line below can be 1 line. refer to last line in var randomImageSource2//
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



/* Outcome Text */
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML="Draw! Roll again!";
}
