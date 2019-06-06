/*
cosmic explorer
ava saunders
june 4th 2019
*/

//let level = 0
let level = 2

let playerX = 50
let playerY = 270

let alien1y = 160
let enemySpeed = 2

let hit = false

function preload() {
   alien1 = loadImage('alien 1.png')
   border_up = loadImage('border_up.png')
   border_down = loadImage('border_down.png')
 }

function setup() {
  createCanvas(800, 600)
}

function draw() {
  background(0, 0, 33)

  if (level === 0) {
    fill(255)
    textSize(40)
    text("COSMIC EXPLORER", 200, 180)
    textSize(20)
    text("press enter to continue", 200, 250)
    if (keyIsDown(ENTER)) {
      level+=1
    }
  }

  if (level === 1) {
    image(border_down, 0, 170)
    image(border_up, 0, 370)
    noStroke()
    fill(51, 7, 89)
    rect(0, 0, width, 170)
    rect(0, 440, width, 400)
    fill(0, 0, 33)
    rect(500, 110, 150, 390)
    //image(alien1, 540, alien1y, alien1.width/1.5, alien1.height/1.5)

    hit = collideRectRect(playerX, playerY, 80, 70, 540, alien1y, 67, 73)

    fill(255)
    //hitbox shape
    //rect(540, alien1y, 67, 73)
    rect(playerX, playerY, 80, 70)
    image(alien1, 540, alien1y, alien1.width/1.5, alien1.height/1.5)

    if (keyIsDown(RIGHT_ARROW) && playerX >= 0 && playerX <= width) {
      playerX += 5
        }
    if (keyIsDown(LEFT_ARROW) && playerX >= 0 && playerX <= width) {
      playerX -= 5
    }
    if (keyIsDown(UP_ARROW) && playerY >= 232) {
      playerY -= 5
    }
    if (keyIsDown(DOWN_ARROW) && playerY <= 300) {
      playerY += 5
    }

    alien1y += enemySpeed

    if (alien1y <= 120 || alien1y >= 420) {
      enemySpeed = enemySpeed*(-1)
    }

    if (hit === true) {
      level = 7

      //reset the level
      playerX = 50
      playerY = 270
      alien1y = 160
      hit = false
    }
  }

  if (level === 2) {
    noStroke()
    image(border_down, 0, 370)
    image(border_up, 0, 540)

    fill(0, 0, 33)
    rect(670, 370, 130, 100)
  }
  if (level === 7) {
    text("game over", 200, 180)
    text("press enter to continue", 200, 250)
    if (keyIsDown(ENTER)) {
      level = 1
    }
  }
}
