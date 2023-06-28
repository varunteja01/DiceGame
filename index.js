//for first dice
var randomNumber1=Math.random();
randomNumber1=randomNumber1 * 6;
randomNumber1=Math.floor(randomNumber1)+1;
//this above code gives random numer between 1-6

//below code is to generate random dice Images/dice1.png - Images/dice6.png
var randomDiceImage1="Images/dice"+randomNumber1+".png";

//as there is more than one img element we use querySelectorAll. we use this to select the element or selector. to tap into first lmg element --> [0]
var image1=document.querySelectorAll("img")[0];

//to change attribute. first parameter is attribute name you want to change. secont parameter is to what you what it to be changed
//now everytime you refresh first dice will produce random img of the dice1-6
image1.setAttribute("src", randomDiceImage1);



//for 2nd dice
var randomNumber2=Math.random();
randomNumber2=randomNumber2 * 6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomDiceImage2="Images/dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


//to decide winner
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="Player 2 wins!🚩";

}
else
{
  document.querySelector("h1").innerHTML="🚩Draw 🚩";

}
