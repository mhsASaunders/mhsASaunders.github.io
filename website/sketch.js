function setup() {
  createCanvas(800, 600)
}

function preload() {
   home = loadImage('home.png')
 }

function draw() {
  background(0)
  image(home, 0, 0, home.width/2, home.height/2)
}
