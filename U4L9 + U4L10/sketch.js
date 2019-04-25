// global variables
let size = 50

let timerNum = 20


let leftX = 150
let leftY = 300 - size

let rightX = 500
let rightY = 300 - size

let hit = false

let fr = 60

let mySound
let ship
let red

function preload() {
   mySound = loadSound('coin_drop.mp3')
   ship = loadImage('spaceship.png')
   star = loadImage('star.png')
 }

function setup() {
  createCanvas(800, 900)
}

function draw() {
  background(0)
  frameRate(fr)
  fill(255)
  rect(0, 600, width, 10)

  //rules
  textSize(20)
  text("Player 1 - Spaceship", 10, 640)
  text("Player 2 - Star", 10, 670)
  text("Player 1 is it. Catch Player 2 before the timer runs out.", 10, 720)
  text("Player 2 is not it. Run from Player 2 until the timer runs out.", 10, 750)

  if(hit) {
    background(100)
    textSize(100)
    text("PLAYER 1 WINS", width/2, height/2)
    //mySound.play()
    }

  hit = collideRectRect(leftX, leftY, size, size, rightX, rightY, size, size)

  drawPlayers()
  keyPressed()
  timer()
}

function keyPressed() {

  if(hit === false && timerNum > 0) {  //checks if either player has won
    //move right square
    if (rightX <= width - size) {
      if (keyIsDown(RIGHT_ARROW)) {
		      rightX += 5
	       }
        }
    if (rightX >= 0) {
      if (keyIsDown(LEFT_ARROW)) {
        rightX -= 5
      }
    }
    if (rightY >= 0) {
      if (keyIsDown(UP_ARROW)) {
        rightY -= 5
      }
    }
    if (rightY <= 600 - size - 5) {
      if (keyIsDown(DOWN_ARROW)) {
        rightY += 5
      }
    }

    //move left square
    if (leftX <= width - size) {
      if (keyIsDown(68)) { //'d' key
        leftX += 5
      }
    }
    if (leftX >= 0) {
      if (keyIsDown(65)) {  //'a' key
        leftX -= 5
      }
    }
    if (leftY >= 0) {
      if (keyIsDown(87)) { //'w' key
        leftY -= 5
      }
    }
    if (leftY <= 600 - size - 5) {
      if (keyIsDown(83)) { //'s' key
        leftY += 5
      }
    }
  }
}

function drawPlayers() {
  image(ship, leftX, leftY, ship.width/2, ship.height/2)
  image(star, rightX, rightY, star.width/2, star.height/2)
}


function timer() {
  fill(255)
  textSize(100)
  text(timerNum, 330, 100)

  if (frameCount % 60 === 0 && timerNum > 0) { //checks if a second has passed
    timerNum --
  }
  if (timerNum === 0) {
    text("PLAYER 2 WINS", 20, height/2.5)
  }
}
