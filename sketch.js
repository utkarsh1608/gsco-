var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  
  speed=random(55,90);
  weight=random(400,1500);
  
  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor=color(225);


  wall = createSprite(1200,200,thickness,height/2);
  
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);
  if(hasCollided(wall, bullet))
  {
    
  }
  
  drawSprites(); 
}