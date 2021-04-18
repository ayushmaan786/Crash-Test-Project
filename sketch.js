var car,wall
var speed, weight;
function setup(){
var canvas = createCanvas(1600,400);
speed = Math.random(55,90)*50
weight=Math.random(400,1500)*50
car = createSprite(50,200,50,50)
wall=createSprite(1500,200,50,height/2)
console.log(speed);
car.velocityX = speed;
  
}

function draw(){
    background(0);
    if(wall.x-car.x<(car.width-wall.width)/2)
    {
      car.velocityX=0;
      var deformation=0.5*weight*speed*speed/22509;
      if (deformation>180)
      {
        car.shapeColor=color(225,0,0); 
      }
      if(deformation<180&&deformation>100)
      {
        car.shapeColor=color(230,230,0)
      }
      if(deformation<100)
      {
        car.shapeColor=color(0,225,0);
      }
    }
    drawSprites();
}