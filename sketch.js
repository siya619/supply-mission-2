var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var log1, log2, log3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	log1Sprite=createSprite();
	log2Sprite=createSprite();
	log3Sprite=createSprite();


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 log1 = Bodies.rectangle(810,260,300,PI/2);
	 World.add(world, log1);

	 log2 = Bodies.rectangle(810,180,300,PI/2);
	 World.add(world, log2);

	 log3 = Bodies.rectangle(810,180,300,PI/2);
	 World.add(world, log3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  log1.display();
  log2.display();
  log3.display();
  

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
     package.y = package.y - 2;
 }
}

