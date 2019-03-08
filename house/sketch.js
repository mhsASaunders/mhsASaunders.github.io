// 3/8/19
function setup() {
  // create a createCanvas
  createCanvas(1200,800)
}

function draw() {
  var houseWidth = 200;
  var houseWidth2= 100;

//create background and grass
  background(94, 250, 255);
  fill(77, 240, 83);
  rect(0,500,1200,700);
//create first house
  fill(250, 210, 130);
  rect(width/2, height/2, houseWidth, houseWidth/2);
  fill(250, 80, 80);
  triangle(width/2, height/2, width/2+houseWidth/2, height/2-houseWidth/3, width/2+houseWidth, height/2);

//create second house
  fill(250, 210, 130);
  rect(width/2, height/2, houseWidth2, houseWidth2/2);
  fill(250, 80, 80);
  triangle(width/2, height/2, width/2+houseWidth2/2, height/2-houseWidth2/3, width/2+houseWidth2, height/2);
}
