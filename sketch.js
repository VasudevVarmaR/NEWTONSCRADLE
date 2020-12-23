const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() 
{
  createCanvas(1000, 500);

  engine = Engine.create();
  world = engine.world;

  roof = new Roof(500,50,200,20); 
  
  bob1 = new Bob(420,250,40);
  bob2 = new Bob(460,250,40);
  bob3 = new Bob(500,250,40);
  bob4 = new Bob(540,250,40);
  bob5 = new Bob(580,250,40);

  rope1 = new Rope(bob1.body,{x:420,y:50});
  rope2 = new Rope(bob2.body,{x:460,y:50});
  rope3 = new Rope(bob3.body,{x:500,y:50});
  rope4 = new Rope(bob4.body,{x:540,y:50});
  rope5 = new Rope(bob5.body,{x:580,y:50});

  Engine.run(engine);
  
  keyPressed();
  
}


function draw() 
{
  rectMode(CENTER);
  background("white");


  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed()
  {
    {
      if(keyCode===UP_ARROW)
      {
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
      }
    }
  }  
  
  