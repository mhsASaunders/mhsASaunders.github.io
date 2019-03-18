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

  //create background
  background(94, 250, 255);
  fill(77, 240, 83);

  //main part of the house
  fill(250, 210, 130);
  rect(width/2, height/2, houseWidth, houseWidth/2);
  //roof
  fill(250, 80, 80);
  triangle(width/2, height/2, width/2+houseWidth/2, height/2-houseWidth/3, width/2+houseWidth, height/2);
}
