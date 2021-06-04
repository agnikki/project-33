const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var PLAY=1;
var END=0;
var gameState=PLAY;

var particle;
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var count =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175,10));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275,10));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375,10));
    }


    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  //for (var j = 0; j < particles.length; j++) {
   
     //particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


  stroke("yellow");
  strokeWeight(6)
   line(0,475,800,475);


   stroke("white");
   textSize(20);
   strokeWeight(0)
   text("Score:"+score,25,50);
   text("500",25,525);
   text("500",105,525);
   text("500",185,525);
   text("500",265,525);
   text("100",345,525);
   text("100",425,525);
   text("100",505,525);
   text("300",585,525);
   text("300",665,525);
   text("300",745,525);
 if(gameState===END){
   textSize(100);
   text("GAME OVER",150,250);
 }


     if(particle!=null)
   {
     particle.display();

     if (particle.body.position.y>760){

      if(particle.body.position.x < 300){
        score=score+500;
        particle=null;
        if(count>= 5) gameState =END;
   
      }
      if(particle.body.position.x>301 && particle.body.position.x<600){
        score=score+100;
        particle=null;
        if(count>= 5) gameState =END;
      }
  

      if(particle.body.position.x>601 && particle.body.position.x<800){
        score=score+300;
        particle=null;
        if(count>= 5) gameState =END;
      }
     }
    }
   }
 
function keyPressed(){
  if (keyCode===32 && gameState!==END){
    count++;
    particle=new Particle(mouseX,10,10);
  }
}
