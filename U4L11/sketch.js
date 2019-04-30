
let boxSize = 70
let overBoxLeft = false
let overBoxRight = false

function preload() {
   swordget = loadImage('swordget.jpg')
   oldman = loadImage('oldman.png')
   sword = loadImage('sword.jpg')
   link = loadImage('link.png')
   statusbar = loadImage('statusbar.jpg')
 }

function setup() {
  createCanvas(800, 670)
}

function draw() {
  print(overBoxLeft)
  background(0)
  image(statusbar, 30, 20, statusbar.width*1.5, statusbar.height*1.5)
  if (overBoxLeft === false && overBoxRight === false) {
    image(oldman, 350, 230, oldman.width/3.5, oldman.height/3.5)
    image(sword, 367, 320, sword.width/3, sword.height/3)
    image(link, 345, 550, link.width/5.5, link.height/5.5)
    fill(255)
    textSize(30)
    text("IT'S DANGEROUS TO GO ALONE! TAKE THIS.", 80, 200)
    rect(150, 450, boxSize, boxSize)
    rect(550, 450, boxSize, boxSize)
    fill(0)
    text("YES", 155, 495)
    text("NO", 563, 495)
  }
  if (overBoxLeft === true) {
    image(swordget, 355, 300, swordget.width/5, swordget.height/5)
  }
}

function mousePressed() {
  if (mouseX <= 400) {
    overBoxLeft = true
  }
  if (mouseX >= 400) {
    overBoxRight = true
  }
/*
  else {
    overBoxRight = true
  }
  */
}
