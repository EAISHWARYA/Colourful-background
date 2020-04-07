
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis
r=map(World.mouseX,1200,400,0,255);
g=map(World.mouseX,1200,400,255,0);
b=map(World.mouseX,1200,400,100,220);
background(r,g,b);
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
fill(255);
  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse(World.mouseX,200,50,40);
  // Remember to fill the canvas with white paint before creating the ellipse.
}