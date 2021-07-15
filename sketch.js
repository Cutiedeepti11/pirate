const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower;

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;
    tower=new Tower(100,230,200,400);
    
}

function draw(){
    background(200);

    Engine.update(engine);
    tower.display();
   
}
