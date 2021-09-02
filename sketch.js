const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Composite = Matter.Composite;
const Composites = Matter.Composites; 
const Render = Matter.Render;


var engine,world;
var blower,blowerMouth,ball;
var button;

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
blower = new Blower(width/2-50,height/2+50,150,20);
blowerMouth = new BlowerMouth(width/2+70,height/2+20,100,100);
ball = new Ball(width/2+80,height/2-80,80,80)

button = createButton("Click to blow");
button.position(width / 2,height-100);
button.class("blowButton");
button.mousePressed(blow);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

blower.show();
blowerMouth.show();
ball.show();
  drawSprites();
 
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});

}






