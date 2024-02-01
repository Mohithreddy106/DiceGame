var prompt1 = prompt(`Player1: Enter your Name to start the Dice Game`);
var prompt2 = prompt(`Player2: Enter your Name to start the Dice Game`);
document.querySelector("#p1").textContent = `${prompt1}`;
document.querySelector("#p2").textContent = `${prompt2}`;
document.getElementById("btnRoll").addEventListener("click", function roll() {
    document.querySelector("button").style.backgroundColor = "green";
    var number1 = player1();
    var number2 = player2();
    winner(number1, number2);
});
function player1 (){
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number generator for image 1

var randomDiceImage1 = `dice${randomNumber1}.png`; // to generate a random image number player2

var randomImageSource1 = `images/${randomDiceImage1}`; //  to pick random image for player 1

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1); // to set a random number image for player 1

return randomNumber1;
}

function player2 (){
var randomNumber2 = Math.floor(Math.random() * 6) + 1;//random number generator for image 2

var randomDiceImage2 = `dice${randomNumber2}.png`; // to generate a random image number for player2

var randomImageSource2 = `images/${randomDiceImage2}`; //  to pick random image for player 1

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //to  set a random number image for player 2
return randomNumber2;

}



function winner(randomNumber1,randomNumber2){
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = `${prompt1} won <br/> 🏆🎉🥇`;
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = `${prompt2} won <br/> 🏆🎉🥇`;
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
return winner;
}
