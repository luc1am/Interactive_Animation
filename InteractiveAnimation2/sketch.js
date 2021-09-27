/*
Lucia Mumma
lcm471
Melody Loveless
Interactive Animation Due Sept 27, 2021 6pm
NOTES::!!!!

must include:
DONE) animated by accessing the frameCount
  -Shapes move across the canvas
  -background color changes over time
  - etc.
DONE) for loop
3) interactive element caused by conditional
  -If mouse is pressed, background changes color
  - if mouseY < height, draw ellipse, else draw..
  - if mousePressed, toggle animation on / off
   etc.

sinusoidal path
  Asin(omega*t)
   sin(frameCount/frequency)*amplitude*/

var size = 50;
var ray = 30;

function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  frameRate(20);
  background(0);
  strokeWeight(1);
  noStroke();
  fill(255,255,0);
  ellipse(width/2,height/2, size,size);
  var cenX = width/2;
  var cenY = height/2;
  //sunrays
  for (let i = 0; i<PI; i+=(PI/12)){
    stroke(255,255,0);
    var elemX = ray*cos(i);
    var elemY = ray*sin(i);
    line(elemX+cenX, elemY+cenY,
      cenX-elemX, cenY-elemY);
  }
  noFill();
  stroke(240);
  ellipse(cenX, cenY, 400, 400);
  noStroke();
  fill(50,50,255);
  //earth revolving about the sun
  var earthX = 200*cos(frameCount/30)+cenX;
  var earthY = 200*sin(frameCount/30)+cenY;
  ellipse(earthX, earthY, 20, 20);
  strokeWeight(3);
  //moon revolving around the earth
  fill(200);
  ellipse(50*cos(frameCount/8)+earthX,
    50*sin(frameCount/8)+earthY, 10, 10);
  //background stars
  for (let i = 0; i<10; i++){
    stroke(255,255,255, random(150));
    var starX = random(width);
    var starY = random(height);
    point(starX,starY);
    stroke(0,0,255,100);
    point(starX+2, starY+2);
  }
  if((abs(250-mouseX)<15) && (
    abs(250-mouseY)<15)) {
      stroke(100,100,100);
      text("click me!", width/2,
       height/2);

      }

}

function keyPressed(){
  if(keyCode ===187){
    ray++;
  }else if (keyCode===189) {
    ray--;
  }
}

function mouseClicked(){
  if((abs(250-mouseX)<15) && (
    abs(250-mouseY)<15)) {
      //destroy
      while (ray<500){
        keyPressed('+');
        ray++;
      }
      noLoop();
    } else { ray = 30; loop();}
}
