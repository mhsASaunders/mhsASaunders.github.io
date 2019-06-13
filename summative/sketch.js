/*
cosmic explorer
ava saunders
june 4th 2019
*/

//global variables

let level = 0

//define starting points for each level
let playerX1 = 50
let playerY1 = 270
let playerX2 = 40
let playerY2 = 450
let playerX3 = 20
let playerY3 = 500
let playerX4 = 400
let playerY4 = 300
let playerX5 = 50
let playerY5 = 270

//define enemy locations for each level
let alien1y = 160
let alien2y = 20
let enemySpeed = 2
let bossX = 320
let bossY = 120
let bossSize = 430

let hit = false

function preload() {

  //load player images
  ship_idle = loadImage('spaceship_idle.png')
  ship_right = loadImage('spaceship_right.png')
  ship_left = loadImage('spaceship_left.png')
  ship_up = loadImage('spaceship_up.png')
  ship_down = loadImage('spaceship_down.png')

   //load enemies
   alien1 = loadImage('alien 1.png')
   alien2 = loadImage('alien 2.png')
   boss = loadImage('boss.png')

   //load stage borders
   border_up = loadImage('border_up.png')
   border_down = loadImage('border_down.png')
   border_left = loadImage('border_left.png')
   border_right = loadImage('border_right.png')

   //load objects
   teleport = loadImage('teleport.png')
   teleport_blue = loadImage('teleport_blue.png')
   teleport_green = loadImage('teleport_green.png')
   teleport_yellow = loadImage('teleport_yellow.png')
   bubble = loadImage('bubble.png')

   //load text font
   font = loadFont('font.ttf')
 }

function setup() {
  createCanvas(800, 600)
  textFont(font)
}

function draw() {
  background(0, 0, 33)

  //call level functions
  if (level === 0) {
    fill(255)
    textAlign(CENTER)
    textSize(40)
    text("COSMIC EXPLORER", width/2, height/2 - 50)
    textSize(20)
    text("press enter to continue", width/2, height/2 + 10)
    if (keyIsDown(ENTER)) {
      level+=1
    }
  }
  if (level === 1) {
    level1()
  }
  if (level === 2) {
    level2()
  }
  if (level === 3) {
    level3()
  }
  if (level === 4) {
    level4()
  }
  if (level === 5) {
    level5()
  }
  if (level === 6) {
    victory()
  }
  if (level === 7) {
    defeat()
  }

}

function level1 () {

  //create stage
  image(border_down, 0, 170)
  image(border_up, 0, 370)
  noStroke()
  fill(51, 7, 89)
  rect(0, 0, width, 170)
  rect(0, 440, width, 400)
  fill(0, 0, 33)
  rect(500, 110, 150, 390)

  //hitbox shape
  //rect(540, alien1y, 67, 73)
  //rect(playerX1, playerY1, 80, 70

  //instructions
  textAlign(CORNER)
  textSize(20)
  fill(255)
  text("get to the end \nuse the arrow keys to move", 30, 50)

  //create enemy
  hit = collideRectRect(playerX1, playerY1, 80, 70, 540, alien1y, 67, 73)
  image(alien1, 540, alien1y, alien1.width/1.5, alien1.height/1.5)
  alien1y += enemySpeed
  if (alien1y <= 120 || alien1y >= 420) {
    enemySpeed = enemySpeed*(-1)
  }

  //move player
  if (keyIsDown(RIGHT_ARROW) && playerX1 >= 0 && playerX1 <= width) {
    playerX1 += 5
    image(ship_right, playerX1, playerY1, ship_right.width/1.5, ship_right.height/1.5)
      }
  if (keyIsDown(LEFT_ARROW) && playerX1 >= 0 && playerX1 <= width) {
    playerX1 -= 5
    image(ship_left, playerX1, playerY1, ship_left.width/1.5, ship_left.height/1.5)
  }
  if (keyIsDown(UP_ARROW) && playerY1 >= 232) {
    playerY1 -= 5
    image(ship_up, playerX1, playerY1, ship_up.width/1.5, ship_up.height/1.5)
  }
  if (keyIsDown(DOWN_ARROW) && playerY1 <= 300) {
    playerY1 += 5
    image(ship_down, playerX1, playerY1, ship_down.width/1.5, ship_down.height/1.5)
  }
  else {
    image(ship_idle, playerX1, playerY1, ship_idle.width/1.5, ship_idle.height/1.5)
  }

  //end level
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

  //create stage
  noStroke()
  image(border_down, 0, 370)
  image(border_up, 0, 540)
  image(border_up, 0 , 280)
  image(border_down, 0, 0, width)
  fill(0, 0, 33)
  rect(660, 300, 140, 130)
  fill(51, 7, 89)
  rect(0, 350, 670, 30)

  //move player
  if (keyIsDown(RIGHT_ARROW) && playerX2 >= 0 && playerX2 <= width) {
    playerX2 += 5
    image(ship_right, playerX2, playerY2, ship_right.width/1.5, ship_right.height/1.5)
  }
  if (keyIsDown(LEFT_ARROW) && playerX2 >= 0 && playerX2 <= width) {
    playerX2 -= 5
    image(ship_left, playerX2, playerY2, ship_right.width/1.5, ship_right.height/1.5)
  }
  if (keyIsDown(UP_ARROW)) {
    playerY2 -= 5
    image(ship_up, playerX2, playerY2, ship_up.width/1.5, ship_up.height/1.5)
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY2 += 5
    image(ship_down, playerX2, playerY2, ship_up.width/1.5, ship_up.height/1.5)
  }

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) {
    keyDown = true
  }
  else {
    image(ship_idle, playerX2, playerY2, ship_right.width/1.5, ship_right.height/1.5)
  }

  //end level
  if (playerX2 === 0) {
    level += 1
  }
}

function level3 () {

  //create stage
  noStroke()
  fill(192, 193, 221)
  rect(150, 130, 100, 500)
  rect(150, 130, 500, 100)
  rect(550, 130, 100, 350)
  rect(360, 400, 290, 100)

  //create enemies
  image(alien2, 160, alien2y, alien2.width/1.5, alien2.height/1.5)
  alien2y += enemySpeed
  if (alien2y === 0 || alien2y >= 300) {
    enemySpeed = enemySpeed*(-1)
  }
  hit = collideRectRect(playerX3, playerY3, 80, 70, 160, alien2y, 67, 73)

  //create objects
  image(teleport, 420, 290)
  teleporting = collideRectRect(playerX3, playerY3, 114, 70, 420, 290, 70, 60)

  //hitbox shapes
  //rect(playerX3, playerY3, 114, 70)
  //rect(420, 290, 70, 60)

  //move player
  if (keyIsDown(RIGHT_ARROW)) {
    playerX3 += 5
    image(ship_right, playerX3, playerY3, ship_right.width/1.5, ship_right.height/1.5)
  }
  if (keyIsDown(LEFT_ARROW)) {
    playerX3 -= 5
    image(ship_left, playerY3, playerY3, ship_left.width/1.5, ship_left.height/1.5)
  }
  if (keyIsDown(UP_ARROW)) {
    playerY3 -= 5
    image(ship_up, playerX3, playerY3, ship_up.width/1.5, ship_up.height/1.5)
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY3 += 5
    image(ship_down, playerX3, playerY3, ship_up.width/1.5, ship_up.height/1.5)
  }

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) {
    keyDown = true
  }
  else {
    image(ship_idle, playerX3, playerY3, ship_idle.width/1.5, ship_idle.height/1.5)
  }

  //end level
  if(teleporting === true) {
    level += 1
  }
  if (hit === true) {
    level = 7
    alien2y = 20
    playerX3 = 20
    playerY3 = 500
  }

}

function level4 () {

  //create stage
  noStroke()
  fill(192, 193, 221)
  rect(0, 0, 300, 200)
  rect(500, 0, 300, 200)
  rect(0, 400, 300, 200)
  rect(500, 400, 300, 200)

  //instructions
  textAlign(CORNER)
  textSize(20)
  fill(255)
  text("pick the \ncorrect object", 20, 50)

  //create objects
  image(teleport, 367, 500)
  image(teleport_blue, 100, 270)
  image(teleport_green, 367, 80)
  image(teleport_yellow, 650, 270)

  //move player
  if (keyIsDown(RIGHT_ARROW)) {
    playerX4 += 5
    image(ship_right, playerX4, playerY4, ship_right.width/1.5, ship_right.height/1.5)
  }
  if (keyIsDown(LEFT_ARROW) && playerX4 >= 0 && playerX4 <= width) {
    playerX4 -= 5
    image(ship_left, playerX4, playerY4, ship_left.width/1.5, ship_left.height/1.5)
  }
  if (keyIsDown(UP_ARROW)) {
    playerY4 -= 5
    image(ship_up, playerX4, playerY4, ship_up.width/1.5, ship_up.height/1.5)
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY4 += 5
    image(ship_down, playerX4, playerY4, ship_up.width/1.5, ship_up.height/1.5)
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) {
    keyDown = true
  }
  else {
    image(ship_idle, playerX4, playerY4, ship_idle.width/1.5, ship_idle.height/1.5)
  }

  //end level
  if (playerY4 >= 430) {
    level += 1
  }
  if (playerX4 <= 100 || playerY4 <= 100 || playerX4 >= 650) {
    playerX4 = 400
    playerY4 = 300
    level = 7
  }

}

function level5() {

  //create stage
  noStroke()
  fill(192, 193, 221)
  rect(0, 0, 200, 200)
  rect(0, 400, 200, 200)

  //instructions
  textAlign(CORNER)
  textSize(20)
  fill(255)
  text("pop the \nbubble to \ndeflate \nthe monster", 10, 30)

  //create objects
  //rect(220, 100, 40, 40)
  //rect(playerX5 + 40, playerY5 + 10, 70, 50)
  image(bubble, 220, 100, bubble.width/2, bubble.height/2)
  pop = collideRectRect(playerX5 + 40, playerY5 + 10, 70, 50, 220, 100, 40, 40)

  //create enemy
  image(boss, bossX, bossY, bossSize, bossSize)
  bossX += random(-4, 4)
  bossY += random(-4, 4)

  //move player
  if (keyIsDown(RIGHT_ARROW)) {
    playerX5 += 5
    image(ship_right, playerX5, playerY5, ship_right.width/1.5, ship_right.height/1.5)
  }
  if (keyIsDown(LEFT_ARROW) && playerX5 >= 0 && playerX5 <= width) {
    playerX5 -= 5
    image(ship_left, playerX5, playerY5, ship_left.width/1.5, ship_left.height/1.5)
  }
  if (keyIsDown(UP_ARROW)) {
    playerY5 -= 5
    image(ship_up, playerX5, playerY5, ship_up.width/1.5, ship_up.height/1.5)
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY5 += 5
    image(ship_down, playerX5, playerY5, ship_up.width/1.5, ship_up.height/1.5)
  }

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) {
    keyDown = true
  }
  else {
    image(ship_idle, playerX5, playerY5, ship_idle.width/1.5, ship_idle.height/1.5)
  }

  //end level
  if (pop === true && bossSize >= 0) {
    bossSize -= 5
  }
  if (bossSize === 0) {
    level += 1
  }

}

function victory() {
  textSize(30)
  textAlign(CENTER)
  text("you won :D", width/2, height/2)
}

function defeat() {
  textSize(30)
  textAlign(CENTER)
  text("game over \npress enter to continue", width/2, height/2)
  if (keyIsDown(ENTER)) {
    level = 1
  }
}
