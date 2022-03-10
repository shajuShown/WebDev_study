var randomNumber1= Math.floor(Math.random()*6)+1;// 1-6 random num


var randomDiceImage1 = "dice" + randomNumber1 + ".png" //diceImage1-6

var randomImageSource1 ="images/" +randomDiceImage1; // src complete for img 

var img1= document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice" + randomNumber2 + ".png"

var randomImageSource2 ="images/" + randomDiceImage2;

var img2 =document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";

}

else if(randomNumber2 > randomNumber1)
{

    document.querySelector("h1").innerHTML="🚩 Player 2 Wins";
}

else 
{
    document.querySelector("h1").innerHTML="Draw";
}