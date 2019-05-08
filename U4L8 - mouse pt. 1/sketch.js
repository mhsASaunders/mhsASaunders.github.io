/*
mouse movement pt. 1
ava saunders (based on "Mouse following using built-in variables" by Courtney Edwards)
april 5th 2019
*/

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
    size += 5
  }
}

function mouseMoved() {
  rectMode (CENTER)
  fill(mouseY, 13, 255);
  rect(mouseX, mouseY, size, size)
}
