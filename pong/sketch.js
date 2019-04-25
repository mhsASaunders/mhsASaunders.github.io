let leftPaddleY = 100
let rightPaddleY = 100

let ballSpeedX = 5
let ballSpeedY = 2
let ballX = 100
let ballY = 100

let hitLeft = false
let hitRight = false

let leftScore = 0
let rightScore = 0

function setup() {
  createCanvas(900, 600)
}

function draw() {

  hitLeft = collideRectRect(20, leftPaddleY, 2, 55, ballX, ballY, 8, 8)
  hitRight = collideRectRect(width - 20, rightPaddleY, 2, 55, ballX, ballY, 8, 8)
  print(hitRight)

  background(0, 0, 0)
  strokeWeight(10)
  stroke(255)
  //center line
  line(width/2, 0, width/2, height)
  //top line
  line(0, 5, width, 5)
  //bottom line
  line(0, 595, 900, 595)

  //draw the score
  fill(255)
  textSize(100)
  text(leftScore, 330, 100)

  if (ballX => width) { //checks if a second has passed
    leftScore += 1
  }

  //draw the paddles
  rect(20, leftPaddleY, 2, 55)
  rect(width - 20, rightPaddleY, 2, 55)

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

  //draw the ball
  rect(ballX, ballY, 8, 8)

  //move the ball
  ballX += ballSpeedX
  ballY += ballSpeedY

  //bounce off paddles
  if (ballX >= 450) {
    if (hitRight) {
        ballSpeedX = -5
      }
    }

  if (ballX <= 450) {
    if (hitLeft) {
        ballSpeedX = 5
      }
    }

  //bounce off bottom and top
  if (ballY >= height - 10 || ballY<=15) {
      ballSpeedY = ballSpeedY*(-1)
    }
}
