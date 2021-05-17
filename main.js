
//
//
//
init() 
document.getElementById("newGame").onclick= init; 
document.getElementById("roll").onclick= roll;
document.getElementById("hold").onclick= hold; 
document.getElementById("volumes").onclick= onoff; 

function init() { 
   
  globalFirstPlayer = 0;
  roundFirstPlayer = 0;
  globalSecondPlayer= 0;
  roundSecondPlayer= 0;
  score=0;
  gameOn=true;
  activePlayer=1;
  soundDice = 0;


document.querySelector('#dice').style.display = 'none';
document.querySelector('#globalFirstPlayer').textContent= globalFirstPlayer ;  
document.querySelector('#globalSecondPlayer').textContent= globalSecondPlayer;
document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
document.querySelector('#roundSecondPlayer').textContent=  roundSecondPlayer;
document.querySelector('#score').textContent= score;
document.querySelector('#firstPlayer').textContent= "joueur 1 à toi de jouer!";

}

function roll(){
  sound()
  
  let randomnumber = Math.floor(Math.random() * 6) + 1; 
  let dice = document.querySelector('#dice');
  dice.style.display = 'block';
  dice.src ="./image/" + randomnumber+'.svg';
  document.querySelector('#score').textContent= randomnumber; 
  
  if ((activePlayer==1)&&(randomnumber>1)) { 
    roundFirstPlayer=roundFirstPlayer + randomnumber;
    document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer; 
    document.querySelector('#firstPlayer').textContent= "joueur 1 à toi de jouer!"; 
    document.querySelector('#secondPlayer').textContent= "";
   }else if ((activePlayer==1)&&(randomnumber==1)){
    
    roundFirstPlayer=0; 
    activePlayer=activePlayer+1; 
    document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
    document.querySelector('#secondPlayer').textContent= "joueur 2 à toi de jouer!";
    document.querySelector('#firstPlayer').textContent= "";

   }else if ((activePlayer==2)&&(randomnumber>1)){
    roundSecondPlayer=roundSecondPlayer + randomnumber;
    document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
    document.querySelector('#secondPlayer').textContent= "joueur 2 à toi de jouer!";
    document.querySelector('#firstPlayer').textContent= "";
    
   
  }else { 
roundSecondPlayer=0;
activePlayer=activePlayer-1;
document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
document.querySelector('#firstPlayer').textContent= "joueur 1 à toi de jouer!";
document.querySelector('#secondPlayer').textContent= "";
}
}
function hold(){
 if ((activePlayer==1)&&(globalFirstPlayer+roundFirstPlayer<100)){ 
  globalFirstPlayer=roundFirstPlayer + globalFirstPlayer;
  roundFirstPlayer=0;
  document.querySelector('#globalFirstPlayer').textContent= globalFirstPlayer;
  document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
  document.querySelector('#firstPlayer').textContent= "joueur 1 à toi de jouer!";
  document.querySelector('#secondPlayer').textContent= "";
  document.querySelector('#secondPlayer').textContent= "joueur 2 à toi de jouer!";
  document.querySelector('#firstPlayer').textContent= "";
  activePlayer= 2
  nextround()
} else if ((activePlayer==1)&&(globalFirstPlayer+roundFirstPlayer>=100)){
  activePlayer=1
  nextgame()

 } else if ((activePlayer==2)&&(globalSecondPlayer+roundSecondPlayer < 100)){
  globalSecondPlayer=roundSecondPlayer + globalSecondPlayer;
  roundSecondPlayer=0;
  document.querySelector('#globalSecondPlayer').textContent= globalSecondPlayer;
  document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
  document.querySelector('#secondPlayer').textContent= "";
  activePlayer=1
  nextround()
} else if ((activePlayer==2)&&(globalSecondPlayer+roundSecondPlayer>= 100)) {
  activePlayer=2
  nextgame()
}
}

function nextround(){
  document.querySelector('#dice').style.display = 'none';

  if (activePlayer==1) {
    document.querySelector('#firstPlayer').textContent= "joueur 1 à toi de jouer!";
    document.querySelector('#secondPlayer').textContent= "";
  } else {

  document.querySelector('#secondPlayer').textContent= "joueur 2 à toi de jouer!";
  document.querySelector('#firstPlayer').textContent= "";
}
}

function nextgame(){
  globalFirstPlayer = 0;
  roundFirstPlayer = 0;
  globalSecondPlayer= 0;
  roundSecondPlayer= 0;
  score=0;
  document.querySelector('#dice').style.display = 'none';
  document.querySelector('#globalFirstPlayer').textContent= globalFirstPlayer ;
  document.querySelector('#globalSecondPlayer').textContent= globalSecondPlayer;
  document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
  document.querySelector('#roundSecondPlayer').textContent=  roundSecondPlayer;
  document.querySelector('#score').textContent= score;

  if (activePlayer==1) {
    document.querySelector('#firstPlayer').textContent= "joueur 1 gagne! à toi de rejouer";
    document.querySelector('#secondPlayer').textContent= "joueur 2 à perdu!";
    
  } else if (activePlayer==2) {

  document.querySelector('#firstPlayer').textContent= "joueur 1 à perdu !";
  document.querySelector('#secondPlayer').textContent= "joueur 2 gagne! à toi de rejouer";   
}
}


function onoff(){
  if (soundDice== 1) {
  
  
  soundDice = soundDice-1 ;
  son.src ="./image/sonoff.png";

 
 
  }else if (soundDice==0) {

  soundDice = soundDice+1;
  son.src ="./image/son.png";
}
}


function sound(){

if (soundDice==1) {
const audio = new Audio('Dice sound.mp3');
audio.play()

}else{

  
}
}