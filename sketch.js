
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var kid,tree,mango,chain,stone;
function preload(){
	//image1=loadImage('Plucking mangoes/tree.png');
	image2=loadImage('Plucking mangoes/boy.png');

	//text=loadImage('Plucking mangoes/text.png');
}
function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	tree = new Tree(900,580);
	stone = new Stone(150,330,50);
	ground= new Ground(width/2,600,width)
	//creating the mangoes here
	mango1=new Mango(800,300,70);
	mango2=new Mango(900,200,70);
	mango3=new Mango(1000,300,70);
	mango4=new Mango(820,200,70);

	//creating the chains
	chain= new Chain(stone.body,{x:230,y:400});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('cyan');
  
  Engine.update(engine);

  
  //image(image1,700,100,400,400);
  image(image2,200,340,200,300);
//  image(text,100,30,1000,30);
 // rect(600,500,1200,20);
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango4.display();
  mango3.display();
  stone.display();
  chain.display();
  
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);

}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	chain.rel();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:150,y:330});
		chain.attach(stone.body);
	}
}
function detectCollision(stones,mangos){
	mangoPos=mangos.body.position;
	stonePos=stones.body.position;

	var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);

	if(distance<=mangos.r+stones.r){
		Matter.Body.setStatic(mangos.body,false);
	}
}
