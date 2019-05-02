function setup() {
  createCanvas(800, 600)
}

function preload() {
   home = loadImage('home.png')
 }

function draw() {
  background(0)
  image(home, 0, 0, home.width/1.5, home.height/1.5)
}
