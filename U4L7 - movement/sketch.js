/*
house assignment
ava saunders
march 18th 2019
*/

//global varaiables
//set x and y of the square
let x = 100
let y = 100

//set speed
let xSpeed = 15
let ySpeed = 15

//set size
let size = 100

function setup() {
  createCanvas(800, 600)
}

function draw() {
  fill(0)
  rect(0, 0, width, height)

  //draw the rectangle
  fill(x - 50, 255, 0)
  rect(x, y, size, size)

 //move the rectangle
  x+=xSpeed
  y+=ySpeed

  //if it reaches the bottom or top, change directions
  if (y+size >= height || y<=0) {
     ySpeed = ySpeed*(-1)
  }
  if (x <= 0 || x+size >= width) {
    xSpeed = xSpeed*(-1)
     }
    
}
