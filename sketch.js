const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 785, 480, 30);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create division objects
  for (var k = 0; k <=200; k = k + 80) {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  //create division objects
  for (var k = 0; k <=400; k = k + 80) {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
//create division objects
for (var k = 0; k <=600; k = k + 80) {
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}
//create division objects
for (var k = 0; k <=800; k = k + 80) {
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}


  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 

    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50){

    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-20; j=j+50) { 

    plinkos.push(new Plinko(j,275));
  }

  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-30; j=j+50) { 

    plinkos.push(new Plinko(j,375));
  }

}


  
    


 


function draw() {
  Engine.update(engine);
  background("black");
  textSize(20)
 
  //create particle objects
  if(frameCount % 60 === 0){
  particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
    }
  ground.display();
  
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  

}
