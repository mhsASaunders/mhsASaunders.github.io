//global variables

function setup() {
  createCanvas(800, 600)
  background (4, 156, 216)
}

function draw() {

  //top left corner
  let x = width/4
  let y = height/4
  coin(x, y)

  //top center
  x = width/2
  coin(x, y)

  //top right corner
  x = 3*width/4
  coin(x, y)

  //left middle
  x = width/4
  y = height/2
  coin(x, y)

  //center middle
  x = width/2
  coin(x, y)

  //right middle
  x = 3*width/4
  coin(x, y)

  //bottom left corner
  x = width/4
  y = 3*height/4
  coin(x, y)

  //bottom center
  x = width/2
  coin(x, y)

  //bottom right corner
  x = 3*width/4;
  coin(x, y);
}

function coin(x, y) {
  fill(135, 104, 24)
  ellipse(x, y, 67, 67)
  fill(251, 208, 0)
  ellipse(x, y, 49, 49)
  fill(135, 104, 24)
  rectMode(CENTER)
  rect(x, y, -6, -26)
}
