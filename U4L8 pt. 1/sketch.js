//ava saunders 4/5/19
// based on "Mouse following using built-in variables" by Courtney Edwards


let size = 30

function setup() {
  createCanvas(600, 600)
}

function draw() {
  fill(255)
  rectMode(CORNER)
  rect(0, 0, width, height)
  mouseMoved()
  if (mouseIsPressed) {
    size = size + 5;
  }
}

function mouseMoved() {
  rectMode (CENTER)
  fill(mouseY, 13, 255);
  rect(mouseX, mouseY, size, size)
}
