let x = 20
let leftPaddleY = 100
let rightPaddleY = 100
let ballSpeedX = 5
let ballSpeedY = 5
let ballX = 20
let ballY = 300

function setup() {
  createCanvas(900, 600)
}

function draw() {
  background(0, 0, 0)
  strokeWeight(10)
  stroke(255)
  //center line
  line(width/2, 0, width/2, height)
  //top line
  line(0, 5, width, 5)
  //bottom line
  line(0, 595, 900, 595)

  //draw the paddles
  rect(x, leftPaddleY, 2, 55)
  rect(width - x, rightPaddleY, 2, 55)

  //move left paddle with 'w' and 's' keys
  if (keyIsDown(87)) {
    leftPaddleY -= 5
  }
  if (keyIsDown(83)) {
    leftPaddleY += 5
  }

  //move right paddle with arrow keys
  if (keyIsDown(UP_ARROW)) {
    rightPaddleY -= 5
  }
  if (keyIsDown(DOWN_ARROW)) {
    rightPaddleY += 5
  }

  rect(ballX += 5, ballY, 8, 8)

  if (ballX + 8 <= 880)
  ballSpeedX = ballSpeedX*(-1)
  }

/*
if (mouseIsPressed) {
  ballX += 4
}
*/
