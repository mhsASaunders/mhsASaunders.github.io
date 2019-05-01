function setup() {
  createCanvas(800, 600)
}

function draw() {
  background(0)

  let x = 0

  while (x <= width) {
    ellipse(x, 200, 25, 25)
    x = x + 50
  }
}
