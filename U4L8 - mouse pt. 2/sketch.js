/*
mouse movement pt. 2
ava saunders (based on "Mouse following using built-in variables" by Courtney Edwards)
april 8th 2019
*/

function setup() {
  createCanvas(1260, 950)
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(5)
    stroke(random(255), mouseX, mouseY)
    line(mouseX, mouseY, width/2, height/2)
  }
}

function mouseMoved() {
  noStroke()
  fill(255)
  ellipse(mouseX, mouseY, 20, 20) //eraser
}
