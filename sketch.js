
var r = 0;
var g = 50;
var b=255;
var ball;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
 
  createCanvas(1200,400);
  

}


function draw(){
      background("pink");
      fill("purple");
      ellipse(mouseX,mouseY,20,20);
    

}

function mouseMoved(){
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);

  background(r,g,b);


}