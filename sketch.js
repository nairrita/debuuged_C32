const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pig2;
var box1, pig1;
var backgroundImg;
var platform;
var slingshot;
var score = 0;

//debugged the object is showing in the console window!!!!

var gameState = "onSling";

var bg = "sprites/bg1.png";

function preload() {
    getBackgroundImage()
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(150, 305, 300, 170);
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body, {x:200, y:50});

}

function draw(){
    if(backgroundImg) 
       background(backgroundImg);
   

    Engine.update(engine);

    text("Score: " + score, 900, 30);
    textSize(20);
    textStyle(BOLD);
    pig1.score();
    pig2.score();

    box1.display();
    box2.display();
    platform.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    slingshot.display();
}

function mouseDragged() {
    if(gameState !== "launched") {
    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});
  }
}

function mouseReleased() {
    slingshot.fly();
    gameState = "launched";

}

function keyPressed() {
    if(keyCode === 32) {
    //slingshot.attach(bird.body);
    }
}

 async function getBackgroundImage() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();//here you had given caps JSON when it shuld be json() as this is a predefined function
    var datetime = responseJSON.datetime// capital JSON is a variable name we are giving on our own 
    var hour = datetime.slice(11, 13);
    console.log(responseJSON);//spelling mistake
    if(hour >= 06 && hour <= 19) {
        bg = "sprites/bg1.png";
    } 
  else {
      bg = "sprites/bg2.jpg";
  }
  backgroundImg = loadImage(bg);

 }

//}
