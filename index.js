var randomNumber1 = Math.floor(Math.random() * 6) + 1; // to get nums betn 1-6
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // to get dice1.png to dice6.png
var randomImageSource1 = "images/" + randomDiceImage1; // to get images/dice1.png-dice6.png
var image1 = document.querySelectorAll("img")[0]; // to select img1 attribute
image1.setAttribute("src",randomImageSource1); // to change img attribute value of img1

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
randomImageSource2 = "images/dice" + randomNumber2 + ".png"; 
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2); //same for img2

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Play 1 Wins!🎉";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Play 2 Wins!🎉"
}
else{
    document.querySelector("h1").innerHTML = "Draw!🚩"
}