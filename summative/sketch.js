function preload() {
   alien1 = loadImage('alien 1.png')
 }

function setup() {
  createCanvas(800, 600)
}

function draw() {
  background(0)
  if (level === 0)
  image(alien1, 350, 230, alien1.width/1.5, alien1.height/1.5)
}
