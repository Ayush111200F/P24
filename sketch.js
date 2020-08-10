var whitezone,ball;
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

	//Create the Bodies Here.
	zone1 = new whiteZone(400,650,200,12,PI/4);
	 zone2 =  new whiteZone(305,610,12,100,PI);
	 zone3 =  new whiteZone(500,610,12,100,PI);
	 
	 ball1 = new Ball(200,300,100,4);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  zone1.display();
  zone2.display();
  zone3.display();
  ball1.display; 
  
  drawSprites();
 
}



