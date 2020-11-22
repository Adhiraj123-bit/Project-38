var backgroundImage
var gameState = 0;
var playerCount;
var distance = 0;
var database;
var allPlayers
var form, player, game;
var car1,car2,car3,car4,cars

function preload () {
backgroundImage=loadImage("images/backGround.jpeg");
}
  


function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  
  //if (backGround) {

 // }
  }
}
