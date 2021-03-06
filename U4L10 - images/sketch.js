/*
sounds and images
ava saunders
april 15th 2019
*/

// global variables
let size = 75

//set seconds on timer
let timerNum = 20

let leftX = 150
let leftY = 300 - size

let rightX = 500
let rightY = 300 - size

let hit = false
let hit2 = false //I needed multiple hit variables because I made more hitboxes for the ship's wings
let hit3 = false

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
  background(0, 0, 50)
  frameRate(fr)
  fill(255)
  rect(0, 600, width, 10)

  //rules
  textSize(20)
  text("Player 1 - Spaceship", 10, 640)
  text("Player 2 - Star", 10, 670)
  text("Player 1 is it. Catch Player 2 before the timer runs out.", 10, 720)
  text("Player 2 is not it. Run from Player 2 until the timer runs out.", 10, 750)

  if(hit || hit2 || hit3) {
    textSize(100)
    text("PLAYER 1 WINS", 20, height/2.5)
    mySound.play()
    }

  hit = collideRectCircle(leftX, leftY, 5, 120, rightX, rightY, 53, 53)
  hit2 = collideRectCircle(leftX, leftY + 40, 150, 40, rightX, rightY, 53, 53)
  hit3 = collideRectCircle(leftX + 10, leftY + 5, 20, 110, rightX, rightY, 53, 53)

  drawPlayers()
  keyPressed()
  timer()
}

function keyPressed() {

  if(hit === false && hit2 === false && hit3 === false && timerNum > 0) {  //checks if either player has won
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
  /*
  debug shapes - I used these to fix the hitboxes
  rect(leftX, leftY + 40, 150, 40)
  rect(leftX, leftY, 10, 120)
  rect(leftX + 10, leftY + 5, 20, 110)
  ellipse(rightX, rightY, 53, 53)
  */

  imageMode(CORNER)
  image(ship, leftX, leftY, ship.width/2, ship.height/2)
  imageMode(CENTER)
  image(star, rightX, rightY, star.width/4, star.height/4)
}


function timer() {
  fill(255)
  textSize(100)
  text(timerNum, 330, 100)

  if (frameCount % 60 === 0 && timerNum > 0 && hit === false && hit2 === false && hit3 === false) { //checks if a second has passed
    timerNum --
  }
  if (timerNum === 0) {
    text("PLAYER 2 WINS", 20, height/2.5)
  }
}
