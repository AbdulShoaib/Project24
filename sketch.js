
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	//Create the Bodies Here.
	dustbin= new Dustbin(400,400,50,50)
	dustbin2= new Dustbin(500,500,50,50)
	dustbin3= new Dustbin(450,450,30,30)
	//paper= new Paper(300,400,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 dustbin.display();
 dustbin2.display();
 dustbin3.display();
 //paper.display();
}



