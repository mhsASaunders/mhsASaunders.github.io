// global variables
let size = 75

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
    textSize(100)
    text("PLAYER 1 WINS", 20, height/2.5)
    //mySound.play()
    }

  hit = collideRectCircle(leftX, leftY, 150, 120, rightX, rightY, 70, 70)

  drawPlayers()
  keyPressed()
  timer()
}

function keyPressed() {

  if(hit === false && timerNum > 0) {  //checks if either player has won
    //move star
    if (rightX <= width - 40) {
      if (keyIsDown(RIGHT_ARROW)) {
        rightX += 5
	       }
        }
    if (rightX >= 0) {
      if (keyIsDown(LEFT_ARROW)) {
        rightX -= 5
      }
    }
    if (rightY >= 40) {
      if (keyIsDown(UP_ARROW)) {
        rightY -= 5
      }
    }
    if (rightY <= 600 - size - 5) {
      if (keyIsDown(DOWN_ARROW)) {
        rightY += 5
      }
    }

    //move ship
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
    if (leftY <= 450) {
      if (keyIsDown(83)) { //'s' key
        leftY += 5
      }
    }
  }
}

function drawPlayers() {
  //debug shapes - I used these to fix the hitboxes
  rect(leftX, leftY + 40, 150, 40)
  ellipse(rightX, rightY, 70, 70)

  imageMode(CORNER)
  image(ship, leftX, leftY, ship.width/2, ship.height/2)
  imageMode(CENTER)
  image(star, rightX, rightY, star.width/4, star.height/4)
}


function timer() {
  fill(255)
  textSize(100)
  text(timerNum, 330, 100)

  if (frameCount % 60 === 0 && timerNum > 0 && hit === false) { //checks if a second has passed
    timerNum --
  }
  if (timerNum === 0) {
    text("PLAYER 2 WINS", 20, height/2.5)
  }
}
