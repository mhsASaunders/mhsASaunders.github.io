let leftPaddleY = 100
let rightPaddleY = 100

let ballSpeedX = 5
let ballSpeedY = 2
let ballX = 200
let ballY = 100

let hitLeft = false
let hitRight = false

let leftScore = 0
let rightScore = 0

let level = 0

function setup() {
  createCanvas(900, 600)
}

function draw() {

  hitLeft = collideRectRect(20, leftPaddleY, 2, 55, ballX, ballY, 8, 8)
  hitRight = collideRectRect(width - 20, rightPaddleY, 2, 55, ballX, ballY, 8, 8)

  if (level === 0) {
    background(0)
    fill(255)
    textSize(100)
    text('PONG', 300, 100)
    textSize(30)
    text('player one uses WASD keys\nplayer 2 uses arrow keys', 300, 150)
    textSize(20)
    text('press enter to continue', 300, 240)

    if (keyIsDown(ENTER)) {
      level += 1
    }
  }

  if (level === 1) {
    background(0)
    strokeWeight(10)
    stroke(255)
    //center line
    line(width/2, 0, width/2, height)
    //top line
    line(0, 5, width, 5)

    paddles()
    ball()
    score()

    if (leftScore === 12 || rightScore === 12) {
      level += 1
    }

  }

  if (level === 2) {

    if (leftScore === 12) {
      textSize(30)
      text('player one wins', 300, 150)
      textSize(20)
      text('press enter to replay', 300, 240)
    }

    if (rightScore === 12) {
      background(0)
      textMode(CENTER, CENTER)
      textSize(70)
      text('PLAYER 2 WINS', 300, 100)
      textSize(20)
      text('press enter to continue', 300, 240)
      textSize(30)
      text('player two wins', 300, 150)
      textSize(20)
      text('press enter to replay', 300, 240)
    }
    if (keyIsDown(ENTER)) {
      level = 1
    }
  }

}

function paddles() {
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
}

function ball() {
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
  else {
    if (hitLeft) {
        ballSpeedX = 5
      }
    }

  //bounce off bottom and top
  if (ballY >= height - 10 || ballY<=15) {
    ballSpeedY = ballSpeedY*(-1)
  }
}

function score() {
  fill(255)
  textSize(100)
  text(leftScore, 330, 100)
  text(rightScore, 520, 100)

  if (ballX === width) {
    leftScore += 1
    ballX = 200
    ballY = 100
  }
  if (ballX === 0) {
    rightScore += 1
    ballX = 200
    ballY = 100
  }
}
