
//
//
//




init()

document.getElementById("newGame").onclick= init;
document.getElementById("roll").onclick= roll;
document.getElementById("hold").onclick= hold;


function init() {
  
  globalFirstPlayer = 0;
  roundFirstPlayer = 0;
  globalSecondPlayer= 0;
  roundSecondPlayer= 0;
  score=0;
  gameOn=true;
  activePlayer=2;
  
document.querySelector('#dice').style.display = 'none';
document.querySelector('#globalFirstPlayer').textContent= globalFirstPlayer ;
document.querySelector('#globalSecondPlayer').textContent= globalSecondPlayer;
document.querySelector('#roundFirstPlayer').textContent= roundFirstPlayer;
document.querySelector('#roundSecondPlayer').textContent=  roundSecondPlayer;
document.querySelector('#score').textContent= score;
}

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

