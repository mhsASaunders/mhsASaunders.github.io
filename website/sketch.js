function setup() {
  createCanvas(800, 600)
}

function preload() {
   home = loadImage('home.png')
 }

function draw() {
  rect(100, 100, 100, 50)
  image(home, 0, 0)
}
