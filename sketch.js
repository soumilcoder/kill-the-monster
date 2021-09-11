const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImage;

function preload(){
  backgroundImage = loadImage('images/GamingBackground.png')
}

function setup(){
    createCanvas(800, 400);

	engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(400,450,300,100);
    ground1 = new Ground(600,200,10,10);

    brick1 = new Brick(400,375);
    brick2 = new Brick(400,325);
    brick3 = new Brick(400,275);
    brick4 = new Brick(400,225);
    brick5 = new Brick(400,175);
    brick6 = new Brick(400,125);
    brick7 = new Brick(400,75);

    brick8 = new Brick(450,375);
    brick9 = new Brick(450,325);
    brick10 = new Brick(450,275);
    brick11 = new Brick(450,225);
    brick12 = new Brick(450,175);
    brick13 = new Brick(450,125);
    brick14 = new Brick(450,75);

    brick15 = new Brick(500,375);
    brick16 = new Brick(500,325);
    brick17 = new Brick(500,275);
    brick18 = new Brick(500,225);
    brick19 = new Brick(500,175);
    brick20 = new Brick(500,125);
    brick21 = new Brick(500,75);

    ball = new Ball(200,400);
    alien = new Alien(600,100);
    constraint = new SlingShot(ball.body, {x: 200, y:100})
    Engine.run(engine);
}

function draw(){
    background(backgroundImage);

    ground.display();
    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    brick5.display();
    brick6.display();
    brick7.display();

    brick8.display();
    brick9.display();
    brick10.display();
    brick11.display();
    brick12.display();
    brick13.display();
    brick14.display();

    brick15.display();
    brick16.display();
    brick17.display();
    brick18.display();
    brick19.display();
    brick20.display();
    brick21.display();

    ball.display();
    alien.display();
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
