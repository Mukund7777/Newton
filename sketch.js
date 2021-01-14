
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(700,400,50,50)
  bob2 = new Bob(750,400,50,50)
  bob3 = new Bob(800,400,50,50)
  bob4 = new Bob(650,400,50,50)
  bob5 = new Bob(600,400,50,50)

  roof = new Roof(700,200,300,20)

  rope1 = new Rope(bob1.body,roof.body,-bob1.diameter*-0,0)
  rope2 = new Rope(bob2.body,roof.body,-bob2.diameter*-1,0)
  rope3 = new Rope(bob3.body,roof.body,-bob3.diameter*-2,0)
  rope4 = new Rope(bob4.body,roof.body,-bob4.diameter*1,0)
  rope5 = new Rope(bob5.body,roof.body,-bob5.diameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230, 230, 230);
  
  drawSprites();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display(); 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 // keyPressed();
}

function keyPressed(){
  if(keyCode === 32){
    //Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-4400,y:-2395});
  }
}

