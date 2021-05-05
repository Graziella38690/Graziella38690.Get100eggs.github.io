$(function () {

/* 
     Règle du jeu
  
       - Le jeu comprend 2 joueurs sur un seul et même écran.
       - Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL). 
       - À chaque tour, le joueur a son ROUND initialisé à 1 et peut lancer un dé autant de fois qu'il le souhaite. 
       - Le résultat d’un lancer est ajouté au ROUND.
       - Lors de son tour, le joueur peut décider à tout moment de:-Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. 
       - Ce sera alors le tour de l’autre joueur. -Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour. 
       - Le premier joueur qui atteint les 100 points sur global gagne le jeu.
  */

let dice = $('#dice');
let globalFirstPlayer = $('#globalFirstPlayer');
let globalSecondPlayer = $('#globalSecondPlayer');
let currentFirstPlayer = $('#currentFirstPlayer');
let currentSecondPlayer = $('#currentFirstPlayer');
const firstPlayer = $('#firstPlayer');
const secondPlayer =$('#secondPlayer');
const roll = $('#roll');
const hold = $('#hold');
let players=[firstPlayer, secondPlayer];
let scoreSecondPlayer=0;
let scoreFirstPlayer=0;
let playing = firstPlayer;
const scoreToWin = 100;

$('#roll').click(function(){
let randomNumber = Math.floor(Math.random() * 6) + 1;
$('#score').html(randomNumber); 
$('#dice').attr ('src','./image/'+ randomNumber+ '.svg'); 
});







});

