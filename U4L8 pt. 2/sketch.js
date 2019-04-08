// ava saunders 4/8/19
//based on "Mouse following using built-in variables" by Courtney Edwards

function setup() {
  createCanvas(600, 600)
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(5)
    stroke(random(255), mouseX, mouseY)
    line(mouseX, mouseY, 300, 300)
  }
}

function mouseMoved() {
  noStroke()
  fill(255)
  ellipse(mouseX, mouseY, 20, 20) //eraser
}



/*
function draw() {
  ellipse(mouseX, mouseY, 20, 20); // Draw a circle
  if (mouseIsPressed) {
    // When the mouse button is pressed
    // change the colour randomly
    fill(random(255), random(255), random(255));
  }
}
*/
