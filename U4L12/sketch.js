let overBox1 = false
function setup() {
  createCanvas(600, 600)
}

function draw() {
  background(0, 0, 128)

  let x = 0
  let y = 0
  let z = 0

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
    ellipse(100, 100, 100, 100)
  }
}

function mousePressed() {
  if (mouseX <= 300) {
    overBox1 = true
  }
}

print(overBox1)
