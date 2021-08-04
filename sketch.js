
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    bobObj1 = new Bob(230,300,55,55);
    bobObj2 = new Bob(310,300,55,55);
    bobObj3 = new Bob(390,300,55,55);
    bobObj4 = new Bob(470,300,55,55);
    bobObj5 = new Bob(550,300,55,55);

    roof = new Roof(400,100,400,30);

    rope1 = new Rope(bobObj1.body,roof.body,-170,0);
	  rope2 = new Rope(bobObj2.body,roof.body,-90,0);
    rope3 = new Rope(bobObj3.body,roof.body,-10,0);
    rope4 = new Rope(bobObj4.body,roof.body,70,0);
    rope5 = new Rope(bobObj5.body,roof.body,150,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  roof.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-200,y:-0});

	}
}



