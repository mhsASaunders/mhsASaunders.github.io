/*
house assignment
ava saunders
march 18th 2019
*/

function setup() {
  // create canvas
  createCanvas(800, 600);
}

function draw() {
  //set the width of the house
  //change this variable to scale the house
  let houseWidth = 200;

  //create background (the ground doesn't scale like the rest)
  background(77, 240, 83);
  fill(94, 250, 600);
  rect(0, 0, 800, houseWidth*2);

  //house
  fill(250, 210, 130);
  rect(width/2, height/2, houseWidth, houseWidth/2);

  //window and door
  fill(161, 252, 255);
  rect(width/2 + houseWidth/6, height/2 + houseWidth/6, houseWidth/6, houseWidth/6);
  fill(250, 80, 80);
  rect(width/2 + houseWidth/2, height/2 + houseWidth/6, houseWidth/4, houseWidth/3);

  //roof
  triangle(width/2, height/2, width/2+houseWidth/2, height/2-houseWidth/3, width/2+houseWidth, height/2);
}
