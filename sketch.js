const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,box,ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;  
  var options={
    'isStatic':true
  }
  box=Bodies.rectangle(200,380,400,10,options);
  World.add(world,box);
  var options={
    'restitution':2
  }
  ball=Bodies.circle(200,200,10,options);
  World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(box.position.x,box.position.y,400,10)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10)
}