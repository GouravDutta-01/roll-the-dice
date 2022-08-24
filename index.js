// Random Dice Face Image Generation for Player 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

// Random Dice Face Image Generation for Player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

// If Player 1 Wins
if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

// If Player 2 Wins
 else if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

// If Match is Draw
else{
document.querySelector("h1").innerHTML = "Draw!";
}
