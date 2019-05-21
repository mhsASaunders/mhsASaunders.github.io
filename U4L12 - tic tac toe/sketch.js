/*
tic tac toe
ava saunders
may 2nd 2019
*/

let level = 0

let win = false

let playerTurnX = false
let playerTurnO = false

let overBox1 = false
let overBox2 = false
let overBox3 = false
let overBox4 = false
let overBox5 = false
let overBox6 = false
let overBox7 = false
let overBox8 = false
let overBox9 = false

let overBox1X = false
let overBox2X = false
let overBox3X = false
let overBox4X = false
let overBox5X = false
let overBox6X = false
let overBox7X = false
let overBox8X = false
let overBox9X = false

let overBox1O = false
let overBox2O = false
let overBox3O = false
let overBox4O = false
let overBox5O = false
let overBox6O = false
let overBox7O = false
let overBox8O = false
let overBox9O = false

function preload() {
   playerx = loadImage('x.png')
 }

function setup() {
  createCanvas(600, 600)
}

function draw() {
  if (level === 0) {
    background(0, 0, 128)
    fill(255)
    textAlign(CENTER, CENTER)
    textSize(32)
    text('Tic-tac-toe', width/2, height/2)

    textSize(16)
    text('X goes first \n click the X button on the bottom right corner to start', width/2, height/2+50)
    text('Press enter to continue', width/2, height/2+100)
    if (keyIsDown(ENTER)) {
      level+=1
    }
  }

  if (level === 1) {
    background(0, 0, 128)

    let x = 0
    let y = 0
    let z = 0

    fill(255)
    //draw boxes
    while (x <= 250) { //top layer
      rect(x + 120, 100, 100, 100)
      x = x + 110
    }
    while (y <= 250) { //middle layer
      rect(y + 120, 210, 100, 100)
      y = y + 110
    }
    while (z <= 250) { //bottom layer
      rect(z + 120, 320, 100, 100)
      z = z + 110
    }

    //draw buttons
    fill(255)
    image(playerx, 500, 495, playerx.width/6.5, playerx.height/6.5)
    ellipse(450, 530, 60, 60)

    if (overBox1 === true) {
      if (playerTurnX === true && overBox1O === false || overBox1X === true) {
        image(playerx, 130, 112, playerx.width/5, playerx.height/5)
        overBox1X = true
      }
      if (playerTurnO === true && overBox1X === false || overBox1O === true) {
        fill(0)
        ellipse(170, 151, 80, 80)
        fill(255)
        ellipse(170, 151, 50, 50)
        overBox1O = true
      }
    }

    if (overBox2 === true) {
      if (playerTurnX === true && overBox2O === false || overBox2X === true) {
        image(playerx, 240, 112, playerx.width/5, playerx.height/5)
        overBox2X = true
      }
      if (playerTurnO === true && overBox2X === false || overBox2O === true) {
        fill(0)
        ellipse(280, 151, 80, 80)
        fill(255)
        ellipse(280, 151, 50, 50)
        overBox2O = true
      }
    }

    if (overBox3 === true) {
      if (playerTurnX === true && overBox3O === false || overBox3X === true) {
        image(playerx, 350, 112, playerx.width/5, playerx.height/5)
        overBox3X = true
      }
      if (playerTurnO === true && overBox3X === false || overBox3O === true) {
        fill(0)
        ellipse(390, 151, 80, 80)
        fill(255)
        ellipse(390, 151, 50, 50)
        overBox3O = true
      }
    }

    if (overBox4 === true) {
      if (playerTurnX === true && overBox4O === false || overBox4X === true) {
        image(playerx, 130, 221, playerx.width/5, playerx.height/5)
        overBox4X = true
      }
      if (playerTurnO === true && overBox4X === false || overBox4O === true) {
        fill(0)
        ellipse(170, 260, 80, 80)
        fill(255)
        ellipse(170, 260, 50, 50)
        overBox4O = true
      }
    }

    if (overBox5 === true) {
      if (playerTurnX === true && overBox5O === false || overBox5X === true) {
        image(playerx, 240, 221, playerx.width/5, playerx.height/5)
        overBox5X = true
      }
      if (playerTurnO === true && overBox5X === false || overBox5O === true) {
        fill(0)
        ellipse(280, 260, 80, 80)
        fill(255)
        ellipse(280, 260, 50, 50)
        overBox5O = true
      }
    }

    if (overBox6 === true) {
      if (playerTurnX === true && overBox6O === false || overBox6X === true) {
        image(playerx, 350, 221, playerx.width/5, playerx.height/5)
        overBox6X = true
      }
      if (playerTurnO === true && overBox6X === false || overBox6O === true) {
        fill(0)
        ellipse(390, 260, 80, 80)
        fill(255)
        ellipse(390, 260, 50, 50)
        overBox6O = true
      }
    }

    if (overBox7 === true) {
      if (playerTurnX === true && overBox7O === false || overBox7X === true) {
        image(playerx, 130, 331, playerx.width/5, playerx.height/5)
        overBox7X = true
      }
      if (playerTurnO === true && overBox7X === false || overBox7O === true) {
        fill(0)
        ellipse(170, 371, 80, 80)
        fill(255)
        ellipse(170, 371, 50, 50)
        overBox7O = true
      }
    }

    if (overBox8 === true) {
      if (playerTurnX === true && overBox8O === false || overBox8X === true) {
        image(playerx, 240, 331, playerx.width/5, playerx.height/5)
        overBox8X = true
      }
      if (playerTurnO === true && overBox8X === false || overBox8O === true) {
        fill(0)
        ellipse(280, 371, 80, 80)
        fill(255)
        ellipse(280, 371, 50, 50)
        overBox8O = true
      }
    }

      if (overBox9 === true) {
        if (playerTurnX === true && overBox9O === false || overBox9X === true) {
          image(playerx, 350, 331, playerx.width/5, playerx.height/5)
          overBox9X = true
        }
        if (playerTurnO === true && overBox9X === false || overBox9O === true) {
          fill(0)
          ellipse(390, 371, 80, 80)
          fill(255)
          ellipse(390, 371, 50, 50)
          overBox9O = true
        }
      }

      //check if players have won
      if (
        overBox1X === true && overBox2X === true && overBox3X === true ||
        overBox4X === true && overBox5X === true && overBox6X === true
      ) {
        level += 1
      }
    } //level 1 bracket

    if (level === 2) {
      fill(0)
      text('player 1 wins', width/2, height/2)
    }

  } //draw bracket


  function mousePressed() {
    //check if buttons have been pressed
    if (mouseX <= 480 && mouseX >= 420 && mouseY >= 500 && mouseY <= 558) { //O button
        playerTurnO = true
        playerTurnX = false
    }
    if (mouseX >= 500 && mouseX <= 560 && mouseY >= 500 && mouseY <= 558) { //X button
      playerTurnX = true
      playerTurnO = false
    }

    //check if mouse is over a box
    if (mouseX <= 220 && mouseX >= 120 && mouseY >= 100 && mouseY <= 200) {
      overBox1 = true
    }
    if (mouseX <= 330 && mouseX >= 230 && mouseY >= 100 && mouseY <= 200) {
      overBox2 = true
    }
    if (mouseX <= 440 && mouseX >= 340 && mouseY >= 100 && mouseY <= 200) {
      overBox3 = true
    }
    if (mouseX <= 220 && mouseX >= 120 && mouseY >= 210 && mouseY <= 310) {
      overBox4 = true
    }
    if (mouseX <= 330 && mouseX >= 230 && mouseY >= 210 && mouseY <= 310) {
      overBox5 = true
    }
    if (mouseX <= 440 && mouseX >= 340 && mouseY >= 210 && mouseY <= 310) {
      overBox6 = true
    }
    if (mouseX <= 220 && mouseX >= 120 && mouseY >= 320 && mouseY <= 420) {
      overBox7 = true
    }
    if (mouseX <= 330 && mouseX >= 230 && mouseY >= 320 && mouseY <= 420) {
      overBox8 = true
    }
    if (mouseX <= 440 && mouseX >= 340 && mouseY >= 320 && mouseY <= 420) {
      overBox9 = true
    }
  }
