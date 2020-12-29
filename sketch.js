const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisions=[];
var plinkos=[];
var particle=[];
var  divheight=200;
var xpos
function setup() {
  createCanvas(480,600);
  engine = Engine.create();
    world = engine.world;
    
    ground1=new Ground(240,594,500,10)
   
    for(var k=0; k<= width;k=k+80) {
    divisions.push(new division(k,height-divheight/2,10,divheight))
    }
    
    for(var k=40; k<= width;k=k+50) {
      plinkos.push(new plinko(k,75,7.5))
      }
      for(var k=15; k<= width;k=k+50) {
        plinkos.push(new plinko(k,175,7.5))
        }
        for(var k=40; k<= width;k=k+50) {
          plinkos.push(new plinko(k,275,7.5))
          }
      
  }

function draw() {
  
  background(0);  
  Engine.update(engine);
  ground1.display();
  for(var k=0;k<divisions.length;k++){
   divisions[k].display();
  }
  
  for(var k=0;k<plinkos.length;k++){
    plinkos[k].display();
  }
  if(frameCount%60===0){
    particle.push(new Particle(random(190,290),0,15));
  }
  for (var j = 0; j < particle.length; j++) {
   
    particle[j].display();
  }
 
  
}