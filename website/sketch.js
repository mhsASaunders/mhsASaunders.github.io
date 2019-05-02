let page = 0

function setup() {
  createCanvas(800, 600)
}

function preload() {
   home = loadImage('home.png')
   menu = loadImage('page1.png')
 }

function draw() {
  if (page === 0) {
    background(0)
   image(home, 0, 0, home.width/1.25, home.height/1.25)
   if (keyIsDown(ENTER)) {
      page += 1
    }
  }
  if (page === 1) {
    background(0)
    image(menu, 0, 0, home.width/1.2, home.height/1.2)
  }
}
