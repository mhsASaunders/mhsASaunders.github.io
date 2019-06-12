/*
cosmic explorer
ava saunders
june 4th 2019
*/

let level = 3

let playerX1 = 50
let playerY1 = 270
let playerX2 = 40
let playerY2 = 450
let playerX3 = 20
let playerY3 = 500
let ship

let alien1y = 160
let enemySpeed = 2

let hit = false

function preload() {
   alien1 = loadImage('alien 1.png')
   border_up = loadImage('border_up.png')
   border_down = loadImage('border_down.png')
   border_left = loadImage('border_left.png')
   border_right = loadImage('border_right.png')
   //ship = loadAnimation('spaceship_right1.png', 'spaceship_right2.png')
   ship_right = loadImage('spaceship_right1.png')
   ship_up = loadImage('spaceship_up1.png')
   teleport = loadImage('teleport.png')
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
    level1 ()
  }

  if (level === 2) {
    level2 ()
  }

  if (level === 3) {
    level3 ()
  }

  if (level === 4) {
    level4 ()
  }

  if (level === 5) {
    level5 ()
  }

  if (level === 6) {
    level6 ()
  }
  
  if (level === 7) {
    text("game over", 200, 180)
    text("press enter to continue", 200, 250)
    if (keyIsDown(ENTER)) {
      level = 1
    }
  }
}

function level1 () {
  image(border_down, 0, 170)
  image(border_up, 0, 370)
  noStroke()
  fill(51, 7, 89)
  rect(0, 0, width, 170)
  rect(0, 440, width, 400)
  fill(0, 0, 33)
  rect(500, 110, 150, 390)

  hit = collideRectRect(playerX1, playerY1, 80, 70, 540, alien1y, 67, 73)
  fill(255)
  //hitbox shape
  //rect(540, alien1y, 67, 73)
  //rect(playerX1, playerY1, 80, 70

  image(ship_right, playerX1, playerY1, ship_right.width/1.5, ship_right.height/1.5)
  image(alien1, 540, alien1y, alien1.width/1.5, alien1.height/1.5)

  if (keyIsDown(RIGHT_ARROW) && playerX1 >= 0 && playerX1 <= width) {
    playerX1 += 5
      }
  if (keyIsDown(LEFT_ARROW) && playerX1 >= 0 && playerX1 <= width) {
    playerX1 -= 5
  }
  if (keyIsDown(UP_ARROW) && playerY1 >= 232) {
    playerY1 -= 5
  }
  if (keyIsDown(DOWN_ARROW) && playerY1 <= 300) {
    playerY1 += 5
  }

  alien1y += enemySpeed

  if (alien1y <= 120 || alien1y >= 420) {
    enemySpeed = enemySpeed*(-1)
  }

  if (playerX1 === width) {
    level += 1
  }

  if (hit === true) {
    level = 7

    //reset the level
    playerX1 = 50
    playerY1 = 270
    alien1y = 160
    hit = false
  }
}

function level2 () {
  noStroke()
  image(border_down, 0, 370)
  image(border_up, 0, 540)
  image(border_up, 0 , 280)
  image(border_down, 0, 0, width)

  fill(0, 0, 33)
  rect(660, 300, 140, 130)

  fill(51, 7, 89)
  rect(0, 350, 670, 30)

  image(ship_right, playerX2, playerY2, ship_right.width/1.5, ship_right.height/1.5)

  if (keyIsDown(RIGHT_ARROW) && playerX2 >= 0 && playerX2 <= width) {
    playerX2 += 5
  //  image(ship_right, playerX2, playerY2, ship_right.width/1.5, ship_right.height/1.5)
  }
  if (keyIsDown(LEFT_ARROW) && playerX2 >= 0 && playerX2 <= width) {
    playerX2 -= 5
  //  image(ship_right, playerX2, playerY2, ship_right.width/1.5, ship_right.height/1.5)
  }
  if (keyIsDown(UP_ARROW)) {
    playerY2 -= 5
//    image(ship_up, playerX2, playerY2, ship_up.width/1.5, ship_up.height/1.5)
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY2 += 5
    //image(ship_up, playerX2, playerY2, ship_up.width/1.5, ship_up.height/1.5)
  }

  if (playerX2 === 0) {
    level += 1
  }
}

function level3 () {
  noStroke()

  //hitbox shapes
  //rect(playerX3, playerY3, 114, 70)
  //rect(420, 290, 70, 60)

  fill(192, 193, 221)
  rect(150, 130, 100, 500)
  rect(150, 130, 500, 100)
  rect(550, 130, 100, 350)
  rect(360, 400, 290, 100)

  image(ship_right, playerX3, playerY3, ship_right.width/1.5, ship_right.height/1.5)
  image(teleport, 420, 290)

  if (keyIsDown(RIGHT_ARROW) && playerX3 >= 0 && playerX3 <= width) {
    playerX3 += 5
      }
  if (keyIsDown(LEFT_ARROW) && playerX3 >= 0 && playerX3 <= width) {
    playerX3 -= 5
  }
  if (keyIsDown(UP_ARROW)) {
    playerY3 -= 5
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY3 += 5
  }

  teleporting = collideRectRect(playerX3, playerY3, 114, 70, 420, 290, 70, 60)

  if(teleporting === true) {
    level += 1
  }
}
