console.log("Jai Mata Di")

// **********CREATING 1ST RANDOM NUMBER******************
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
console.log(randomNumber1);

// *************CREATING 2ND RANDOM NUMBER******************
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
console.log(randomNumber2);

var diceName1="dice" + randomNumber1 + ".png";
var diceName2="dice" + randomNumber2 + ".png";

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="⛳Player 1 wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins⛳";
}
else
{
    document.querySelector("h1").innerHTML="😜Match Draws";
}

document.querySelector(".img1").setAttribute("src","images/"+diceName1);
document.querySelector(".img2").setAttribute("src","images/"+diceName2);
