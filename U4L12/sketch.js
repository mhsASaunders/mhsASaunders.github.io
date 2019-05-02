let level = 0

let playerTurnX = true
let playerTurnY = false

let overBox1 = false
let overBox2 = false
let overBox3 = false
let overBox4 = false
let overBox5 = false
let overBox6 = false
let overBox7 = false
let overBox8 = false
let overBox9 = false

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
    text('X goes first', width/2, height/2+50)
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
    if (overBox1 === true) {
    //  if (playerTurnX === true) {
        fill(0)
        rect(135, 120, 70, 70)
      //}
      /*
      else if (playerTurnX === false) {
        ellipse(135, 120, 70, 70)
      }
      */
    }
    if (overBox4 === true) {
      fill(0)
      rect(135, 225, 70, 70)
    }
    fill(255)
    rect(500, 500, 60, 60)
    ellipse(450, 530, 60, 60)
    }
}


  function mousePressed() {
//check if buttons have been pressed
/*
    if (mouseX <= 480 && mouseX >= 420 && mouseY >= 500 && mouseY <= 550) {
        playerTurnX = false
      }
    */
    if (mouseX <= 220 && mouseX >= 120 && mouseY >= 100 && mouseY <= 200) {
      overBox1 = true
    }
    if (mouseX <= 220 && mouseX >= 120 && mouseY >= 210 && mouseY <= 310) {
      overBox4 = true
    }
  }
