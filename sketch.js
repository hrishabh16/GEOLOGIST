const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1,stone2;
var rubber1,rubber2;
var iron1,iron2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
    rubber1 = new Rubber(100,0,40);

    stone1 = new stone(400,200,40,45);
    stone2 = new stone (700,300,100,80);
    
    iron1 = new iron (300,40,50,50);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    stone2.display();
    rubber1.display();
    iron1.display();
 
}