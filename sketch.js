const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,box;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 box = new Box(100,390,400,100);
  box2 = new Box(150,340,200,50)  
  box3 = new Box(75,290,100,50);
  box4= new Box(32.5,240,50,50);
 















ground =new Ground(200,390,400,20)
}

function draw(){

    background(0);
    
    Engine.update(engine);
    


      box.disrect();
      box2.disrect();
      box3.disrect();
      box4.disrect();
      //box5.disrect();
    


   // for(var i = 0;i<50;i++)
    //Engine.update(engine);
    
    ground.disrect();
}

