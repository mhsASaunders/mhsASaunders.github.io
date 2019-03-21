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
  //the sky will change colour if you drag your mouse across the screen
  noStroke();
  background(77, 240, 83);
  fill(mouseX, 196, 255);
  rect(0, 0, 800, houseWidth*2);

  //sun
  fill(255, 227, 87);
  ellipse(650, 72, houseWidth/2, houseWidth/2);

  //cloud
  fill(255, 255, 255);
  ellipse(houseWidth/1.12, houseWidth/1.5, houseWidth/3.7, houseWidth/3.7);
  ellipse(houseWidth*1.1, houseWidth/1.5, houseWidth/3.7, houseWidth/3.7);
  ellipse(houseWidth*1.3, houseWidth/1.5, houseWidth/3.7, houseWidth/3.7);
  ellipse(houseWidth, houseWidth/2 , houseWidth/3.7, houseWidth/3.7);
  ellipse(houseWidth*1.2, houseWidth/2 ,houseWidth/3.7, houseWidth/3.7);

  //house
  fill(250, 210, 130);
  rect(width/2, height/2, houseWidth, houseWidth/2);

  //window and door
  fill(161, 252, 255);
  rect(width/2 + houseWidth/6, height/2 + houseWidth/6, houseWidth/6, houseWidth/6);
  fill(250, 80, 80);
  rect(width/2 + houseWidth/2, height/2 + houseWidth/6, houseWidth/4, houseWidth/3);
  fill(153, 153, 153);
  rect(width/2 + houseWidth/1.85, height/2 + houseWidth/3, houseWidth/25, houseWidth/25);

  //roof
  fill(250, 80, 80);
  triangle(width/2, height/2, width/2+houseWidth/2, height/2-houseWidth/3, width/2+houseWidth, height/2);

}
