// global variables
let size = 50

let timerNum = 5


let leftSquareX = 150
let leftSquareY = 300 - size

let rightSquareX = 500
let rightSquareY = 300 - size

let hit = false

let fr = 60

//let mySound
//let planet

/*
function preload() {
   mySound = loadSound('coin_drop.mp3')
   planet = loadImage('planet.png')
 }
*/

function setup() {
  createCanvas(800, 900)
}

function draw() {
  background(0)
  frameRate(fr)
  textAlign(CENTER, CENTER);
  //image(planet, 0, 0, planet.width/2, planet.height/2)
  fill(255)
  rect(0, width, width, 600)

  //text("Player 1 - Purple Square", width/2, height/2)

  if(hit) {
    background(100)
    textSize(100)
    text("hit!", width/2, height/2)
    //mySound.play()
    }

  hit = collideRectRect(leftSquareX, leftSquareY, size, size, rightSquareX, rightSquareY, size, size)

  drawSquares()
  keyPressed()
  timer()
}

function keyPressed() {

  if(hit === false) {
    //move right square
	 if (keyIsDown(RIGHT_ARROW)) {
		  rightSquareX += 5
	 }
    if (keyIsDown(LEFT_ARROW)) {
      rightSquareX -= 5
    }
    if (keyIsDown(UP_ARROW)) {
      rightSquareY -= 5
    }
    if (keyIsDown(DOWN_ARROW)) {
      rightSquareY += 5
    }

    //move left square
    if (keyIsDown(68)) {
      leftSquareX += 5
    }
    if (keyIsDown(65)) {
      leftSquareX -= 5
    }
    if (keyIsDown(87)) {
      leftSquareY -= 5
    }
    if (keyIsDown(83)) {
      leftSquareY += 5
    }
  }
}


function drawSquares() {
  fill(75, 0, 130)
  rect(leftSquareX, leftSquareY, size, size)

  fill(255, 255, 255)
  rect(rightSquareX, rightSquareY, size, size)
}


function timer() {
  fill(255)
  textSize(100)
  text(timerNum, width/2, 100)

  if (frameCount % 60 === 0 && timerNum > 0) { //checks if a second has passed
    timerNum --
  }
  if (timerNum === 0) {
    text("PLAYER 2 WINS", width/2, height/2.5)
  }
}
