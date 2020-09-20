
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	dustbin=new Dustbin(650,650,20,100)
	dustbin1=new Dustbin1(450,645,20,80)
	dustbin2=new Dustbin2(550,680,180,20)
	paper=new Paper(200,200,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.positiuon,{x:85,y:-85});

}
}

