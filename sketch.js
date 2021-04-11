const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// var snow1;
var snowFlakes = [];

function preload(){
  snow1 = loadImage("snow1.jpg");
}

function setup(){
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    for(var i = 0; i < 100; i++){
      snowFlakes.push(new Snow(random(0,800),random(0,600)));
    }
    
}

function draw(){
    background(0);
    Engine.update(engine);

    imageMode(CENTER);
    image(snow1,400,300,800,600);

    for(var i = 0; i < 100; i++){
        snowFlakes[i].display();
    }

    
    if((frameCount%100===0)||(frameCount%101===0)||(frameCount%102===0)||(frameCount%103===0)||(frameCount%104===0)||(frameCount%105===0)||(frameCount%106===0)||(frameCount%107===0)||(frameCount%108===0)||(frameCount%109===0)||(frameCount%110===0)||(frameCount%111===0)||(frameCount%112===0)){
    }
}   



////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}*/