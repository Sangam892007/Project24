
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbinSide1,dustbinSide2,dustbinBase;
var paperBall;

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,370,1100,20);

	dustbinBase = new Dustbin(800,350.5,200,20);
	dustbinSide1 = new Dustbin(690.5,310.5,20,100);
	dustbinSide2 = new Dustbin(900,310.5,20,100);

	paperBall = new Ball(100,0,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbinBase.display("White");
  dustbinSide1.display("White");
  dustbinSide2.display("White");
  paperBall.display("Pink");
  
  drawSprites();
 
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:160});
    }

}

