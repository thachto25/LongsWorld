var clicks = 0;
var eggX = 750;
var eggY = 400;

function setup() {
  createCanvas(1500,800); 
  textAlign(CENTER)
  textStyle(BOLD);
  textFont('Courier');
  strokeWeight(1);

}

function draw() {
  background(235,185,160);

//text display
  fill(0);
  textSize(32);
  strokeWeight(1);
  text("Ability: Reincarnation",750,160);

  //blue rectangle 
  stroke(0,0,0);
  strokeWeight(1);
  fill(160,210,235);
  rectMode(CENTER);
  rect(750,400,750,400);

  //egg 
  fill(0)
  textSize(25);
  text("Click on egg to hatch",750,525); 


  if (clicks < 3) {
    fill(255);
    stroke(0);
    ellipse(eggX, eggY, 120, 160);
  } 
  else {
    textSize(150);
    text("🐉", eggX, eggY);
  }
}

//
function mousePressed() {
  let d = dist(mouseX, mouseY, 750, 400); 
  if (d < 80) {
  if (clicks < 3) {
    clicks = clicks + 1;
    shaking = true;
    shakeFrames = 10;
  }
}
}