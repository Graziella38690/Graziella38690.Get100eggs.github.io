
//
//
//

init()
document.getElementById("newGame").onclick= init;

function init() {
  
  globalFirstPlayer = 10;
  roundFirstPlayer = 5;
  globalSecondPlayer= 52;
  roundSecondPlayer= 15;
  score=0;
  scorewin=100;
  gameOn=true;
  activePlayer=1;
  
document.querySelector('#dice').style.display = 'none';
document.querySelector('#globalFirstPlayer').textContent= globalFirstPlayer ;
document.querySelector('#globalSecondPlayer').textContent= globalSecondPlayer;
document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
document.querySelector('#roundSecondPlayer').textContent=  roundSecondPlayer;
document.querySelector('#score').textContent= score;
}



document.getElementById("roll").onclick= roll;
document.getElementById("hold").onclick= hold;




function roll(){
  // 1. Random number
  let randomnumber = Math.floor(Math.random() * 6) + 1;
  //2. Img dice
  let dice = document.querySelector('#dice');
  dice.style.display = 'block';
  dice.src ="./image/" + randomnumber+'.svg';
  document.querySelector('#score').textContent= randomnumber;
  
  if ((activePlayer==1)&&(randomnumber>1)) {
    roundFirstPlayer=roundFirstPlayer + randomnumber;
    document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
   
   }else if ((activePlayer==1)&&(randomnumber==1)){
    roundFirstPlayer=0;
    activePlayer=activePlayer+1;
    document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;

   }else if ((activePlayer==2)&&(randomnumber>1)){
    roundSecondPlayer=roundSecondPlayer + randomnumber;
    document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;

  }else { 
roundSecondPlayer=0;
activePlayer=activePlayer-1;
document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;

}
};




function hold(){
 if (activePlayer==1) {
  globalFirstPlayer=roundFirstPlayer + globalFirstPlayer;
  roundFirstPlayer=0;
  document.querySelector('#globalFirstPlayer').textContent= globalFirstPlayer;
  document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
  activePlayer=2
 }
 else {

  globalSecondPlayer=roundSecondPlayer + globalSecondPlayer;
  roundSecondPlayer=0;
  document.querySelector('#globalSecondPlayer').textContent= globalSecondPlayer;
  document.querySelector('#roundSecondPlayer').textContent= roundSecondPlayer;
  activePlayer=1
}
};

