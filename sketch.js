const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,
block8,block,block10,block11,block12;

var ground,ground1;




function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  canvas = createCanvas(1200,500);
  engine = Engine.create();
  world  = engine.world;

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  
  sling    = new SlingShot(this.ball,{x:100,y:100});

  ground  = new Ground(510, 350, 300, 40);
  ground1 = new Ground(600, 480, 1200, 40);


  //bottom layer
  block  = new Block(400, 170, 30, 70);
  block1 = new Block(455, 170, 30, 70);
  block2 = new Block(510, 170, 30, 70);
  block3 = new Block(565, 170, 30, 70);
  block4 = new Block(620, 170, 30, 70);
  //Middle Layer 
  block5 = new Block(455, 100, 30, 70);
  block6 = new Block(510, 100, 30, 70);
  block7 = new Block(565, 100, 30, 70);
  //Top Layer 
  block8 = new Block(510, 20,  30, 70);


}

function draw() {
  background("black");
  Engine.update(engine);

  text("DRAG THE HEXAGONAL STONE AND RELEASE IT,TO LAUNCH IT TOWARDS THE BLOCKS",100,20)

  sling.display();  

  ground1.display();
  ground.display();

  fill("#6A1292")
  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  fill("#A24BB4")
  block5.display();
  block6.display();
  block7.display();
  fill("#DE70EB")
  block8.display();  

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);



 



}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX , y:mouseY});
}


function mouseReleased(){
  sling.fly();
}
