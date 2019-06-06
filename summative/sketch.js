/*
cosmic explorer
ava saunders
june 4th 2019
*/

let level = 0

let alien1y = 100

function preload() {
   alien1 = loadImage('alien1.png')
 }

function setup() {
  createCanvas(800, 600)
}

function draw() {
  background(0)

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
    image(alien1, 100, alien1y, alien1.width/1.5, alien1.height/1.5)
  }
}
