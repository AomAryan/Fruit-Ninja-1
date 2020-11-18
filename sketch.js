var knife,knifeImage;
var fruit1,fruit2,fruit3,fruit4;
var PLAY=1;
var END=0;
var gameState = 1;
var fruitsGroup;
var monster,monsterAnimation,monstersGroup;
var fruit;


function preload(){
  knifeImage = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterAnimation = loadAnimation("alien1.png","alien2.png");
}
function setup(){
createCanvas(500,500);
knife = createSprite(40,200,20,20);
knife.addImage(knifeImage);
knife.scale=0.7;  
enemyGroup = new Group();
fruitsGroup =  new Group(); 
  
}

function draw(){
background ("white");
  if(gameState === PLAY){
    fruits();
    Enemy();
  }
  else if(gameState === END){
    
  }
  
  drawSprites();
}

function fruits(){
  if(World.frameCount%80 === 0){
    var fruit = createSprite(400,200,20,20);
    fruit.scale = 0.2;
    var r = Math.round(random(1,4));
    if( r === 1){
      fruit.addImage(fruit1);
    }
    else if(r == 2){
      fruit.addImage(fruit2);
    }
    else if(r == 3){
      fruit.addImage(fruit3);
    }
    else{
      fruit.addImage(fruit4);
    } 
  fruit.y = Math.round(random(50,340)); 
  fruit.velocityX = -7;
  fruit.setLifetime = 100;
    
 // fruitsGroup.add(fruit);
  }
}
   function Enemy(){
     if(World.frameCount%200 === 0){
       monster = createSprite(400,200,20,20);
                              monster.addAnimation("moving",monsterAnimation);
       monster.y = Math.round(random(100,300));
       monster.velocityX = -8;
       monster.setLifetime = 50;
       
       enemyGroup.add(monster);
     }
   }







