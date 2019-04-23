// global variables
let size = 50

let spaceshipLeftX = 300
let spaceshipLeftY = 0

//let leftSquareFrontX = 150
//let leftSquareBackX = leftSquareFrontX - size/2
//let leftSquareY = 300 - size

//let rightSquareFrontX = 650
//let rightSquareBackX = rightSquareFrontX + size/2
//let rightSquareY = 300 - size

let hit = false

let mySound
let img

function preload() {
   mySound = loadSound('coin_drop.mp3')
   spaceshipLeft = loadImage('spaceship_left.png')
   spaceshipRight = loadImage('spaceship_right.png')
 }

function setup() {
  createCanvas(800, 600)
}

function draw() {
  background(0)
  image(spaceshipLeft, spaceshipLeftX, spaceshipLeftY, spaceshipLeft.width/2, spaceshipLeft.height/2)

  if(hit) {
    background(100)
    textSize(100)
    text("hit!", width/2, height/2)
    mySound.play()
    }

  hit = collideRectRect(leftSquareBackX, leftSquareY, size/2, size, rightSquareBackX, rightSquareY, size/2, size)

  //drawSquares()
  keyPressed()
}

function keyPressed() {

  if(hit === false) {
    //move right square
	 if (keyIsDown(RIGHT_ARROW)) {
		  rightSquareFrontX += 5
      rightSquareBackX += 5
	 }
    if (keyIsDown(LEFT_ARROW)) {
      rightSquareFrontX -= 5
      rightSquareBackX -= 5
    }
    if (keyIsDown(UP_ARROW)) {
      rightSquareY -= 5
    }
    if (keyIsDown(DOWN_ARROW)) {
      rightSquareY += 5
    }

    //move left square
    if (keyIsDown(68)) {
      spaceshipLeftX += 5
      //leftSquareFrontX += 5
      //leftSquareBackX += 5
    }
    if (keyIsDown(65)) {
      spaceshipLeftX -= 5
      //leftSquareFrontX -= 5
      //leftSquareBackX -= 5
    }
    if (keyIsDown(87)) {
      spaceshipLeftY -= 5
      //leftSquareY -= 5
    }
    if (keyIsDown(83)) {
        spaceshipLeftY -=
      //leftSquareY += 5
    }
  }
}

/*
function drawSquares() {
  fill(100, leftSquareBackX, leftSquareY)
  rect(leftSquareBackX, leftSquareY, size/2, size)
  fill(255, 255, 255)
  rect(leftSquareFrontX, leftSquareY, size/2, size)

  fill(100, rightSquareBackX, rightSquareY)
  rect(rightSquareBackX, rightSquareY, size/2, size)
  fill(255, 255, 255)
  rect(rightSquareFrontX, rightSquareY, size/2, size)
}
*/
