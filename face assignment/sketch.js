//Global Variables
let faceHeight = 500;
let faceWidth = faceHeight/3*2.75;
let eyeSize = faceHeight/5.2

function setup() {
  //Canvas
  createCanvas(1000,800);
  //Background colour
  background(100);
}
//Used to bring the functions onto the screen
function draw() {
  strokeWeight(1);
  //to have hat behind ears
  hatBase();
  drawEars();
  drawHead();
  //to have hat front in front of ears
  drawSideburns();
  drawHat();
  drawMouth();
  drawMoustache();
  drawEyebrows();
  drawEyes();
  //To increase the line weight of the nose
  strokeWeight(4);
  drawNose();
}

//done by Hunter
function drawEars(){
  fill(248, 204, 169);
  //Left ear
  //Inner ear done by Michael, outer ear done by Hunter
  arc(width/2-faceWidth/2,height/2-faceWidth/100,faceWidth/2.5,faceHeight/2.5,PI/2,3*PI,OPEN);
  //Inner Left Ear
  noFill();
  arc(width/2-faceWidth/2.5,height/2-faceWidth/100,faceWidth/2,faceHeight/3,PI/2,3*PI,OPEN);
  //Right ear
  fill(248,204,169);
  arc(width/2+faceWidth/2,height/2-faceWidth/50,faceWidth/2.5,faceHeight/2.50,PI/2.5,3*PI,OPEN);
  //Inner Right Ear
  noFill();
  arc(width/2+faceWidth/2.5,height/2-faceWidth/50,faceWidth/2,faceHeight/3,PI/2,3*PI,OPEN);
}
//The Head by Michael
function drawHead() {
  fill(248,204,169);
  ellipse(width/2, height/2, faceWidth, faceHeight);
}
//Sideburns by Ava
function drawSideburns() {
  fill(140, 44, 45)
  strokeWeight(2)

  //right sideburn
  beginShape()
  curveVertex(width/2 - faceWidth/2.35, height/2 - faceHeight/11)
  curveVertex(width/2 - faceWidth/2.52, height/2 + faceHeight/200)
  curveVertex(width/2 - faceWidth/2.35, height/2 + faceHeight/12)
  curveVertex(width/2 - faceWidth/2.24, height/2 + faceHeight/5.5)
  curveVertex(width/2 - faceWidth/2.09, height/2 + faceHeight/5.5)
  curveVertex(width/2 - faceWidth/1.96, height/2 + faceHeight/30)
  curveVertex(width/2 - faceWidth/2, height/2 - faceHeight/5)
  curveVertex(width/2 - faceWidth/2.31, height/2 - faceHeight/4.5)
  curveVertex(width/2 - faceWidth/2.35, height/2 - faceHeight/11)
  curveVertex(width/2 - faceWidth/2.52, height/2 + faceHeight/200)
  curveVertex(width/2 - faceWidth/2.35, height/2 + faceHeight/12)
  endShape()

  //left sideburn
  beginShape()
  curveVertex(width/2 + faceWidth/2.5, height/2 - faceHeight/4.5)
  curveVertex(width/2 + faceWidth/2.1, height/2 - faceHeight/5)
  curveVertex(width/2 + faceWidth/2, height/2 + faceHeight/30)
  //bottom right
  curveVertex(width/2 + faceWidth/2.09, height/2 + faceHeight/5.3)
  //bottom left
  curveVertex(width/2 + faceWidth/2.26, height/2 + faceHeight/5.3)
  //bottom of the "bump"
  curveVertex(width/2 + faceWidth/2.38, height/2 + faceHeight/12)
  //middle of the "bump"
  curveVertex(width/2 + faceWidth/2.55, height/2 + faceHeight/200)
  //top of the "bump"
  curveVertex(width/2 + faceWidth/2.38, height/2 - faceHeight/11)
  curveVertex(width/2 + faceWidth/2.5, height/2 - faceHeight/4.5)
  curveVertex(width/2 + faceWidth/2.1, height/2 - faceHeight/5)
  curveVertex(width/2 + faceWidth/2, height/2 + faceHeight/30)
  endShape()
}

//Assigned to Hunter, done by John
function drawEyebrows(){
    stroke(10)
    fill(100,45,45);
    //left eyebrow
    ellipse(width/2-faceWidth/4.5,height/2-faceHeight/7,faceWidth/3.5,faceHeight/3);

    noStroke()
    fill(248, 204, 169);
    ellipse(width/2-faceWidth/4.2,height/2-faceHeight/15,faceWidth/2.7,faceHeight/3);

    //Right eyebrow
    stroke(10)
    fill(100,45,45);
    ellipse(width/2+faceWidth/4.5,height/2-faceHeight/7,faceWidth/3.5,faceHeight/3);

    noStroke()
    fill(248, 204, 169);
    ellipse(width/2+faceWidth/4.2,height/2-faceHeight/15,faceWidth/2.7,faceHeight/3);
    stroke(10)
}
//Nose by Michael van Staden
function drawNose(){
  fill(248,204,169);
  ellipse(width/2, height/2+faceWidth/6.5, faceWidth/2.5, faceWidth/3);
}

//done by Ava
function drawEyes() {
  //whites
  fill(255)
  strokeWeight(2)
  ellipse(width/2 - faceWidth/6.1, height/2 - faceHeight/30, eyeSize, eyeSize*1.4)
  ellipse(width/2 + faceWidth/5.9, height/2 - faceHeight/30, eyeSize, eyeSize*1.4)

  //irises
  fill(108, 213, 245)
  strokeWeight(1)
  ellipse(width/2 - faceWidth/7.3, height/2 - faceHeight/32, eyeSize/1.4, eyeSize*1.1)
  ellipse(width/2 + faceWidth/7, height/2 - faceHeight/32, eyeSize/1.4, eyeSize*1.1)

  //pupils
  fill(0)
  ellipse(width/2 - faceWidth/7.5, height/2 - faceHeight/33, eyeSize/1.8, eyeSize/1.15)
  ellipse(width/2 + faceWidth/7.1, height/2 - faceHeight/33, eyeSize/1.8, eyeSize/1.15)
}

//Hat by Michael van Staden
function hatBase(){
  strokeWeight(2.5);
  fill(225,21,54);
  arc(width/2, height/2-faceWidth/100, faceWidth+faceWidth/4, faceHeight*1.56,4*PI/4,0,OPEN);
}

//Hat by Michael van Staden
function drawHat(){
  noFill();
  //the M logo
  fill(225);
  ellipse(width/2,height/2-faceWidth/1.65,faceWidth/2.6,faceWidth/3);

  //Mario's hat frontpiece
  //top of hat tip
  fill(225,21,54);
  arc(width/2, height/2-faceWidth/6, faceWidth, faceHeight*.68,4.15*PI/4,7.82*PI/4,OPEN);

  //bottom of hat tip
  fill(152,19,24);
  arc(width/2, height/2-faceWidth/17.5, faceWidth+faceWidth/16, faceHeight*.77,4.4*PI/4,7.5*PI/4,OPEN);

  //cover for arcs of hat
  fill(248,204,169);
  arc(width/2, height/2-faceWidth/10, faceWidth-faceWidth/50, faceHeight/1.75,4.3*PI/4,7.7*PI/4,OPEN);
  //M for hat
  fill(225,21,54);

  beginShape();
  vertex(width/2-faceWidth/6,height/2-faceWidth/1.7);
  vertex(width/2-faceWidth/13,height/2-faceWidth/1.37);
  vertex(width/2,height/2-faceWidth/1.55);
  vertex(width/2+faceWidth/13,height/2-faceWidth/1.37);
  vertex(width/2+faceWidth/6,height/2-faceWidth/1.7);
  vertex(width/2+faceWidth/8.5,height/2-faceWidth/1.85);
  vertex(width/2+faceWidth/13,height/2-faceWidth/1.5);
  vertex(width/2+faceWidth/13,height/2-faceWidth/1.5);
  vertex(width/2,height/2-faceWidth/1.67);
  vertex(width/2-faceWidth/13,height/2-faceWidth/1.5);
  vertex(width/2-faceWidth/8.5,height/2-faceWidth/1.85);
  endShape(CLOSE);
}

//John will do Mouth
function drawMouth() {
  //Code for the mouth
  noFill();
  arc(width/2, height/2+faceHeight/8*3, faceWidth/4, faceHeight/25, 0, PI);

  //Bump under mouth
  arc(width/2, height/2+faceHeight/16*7, faceWidth/15, faceHeight/50, 0, PI);
}

//John will do Moustache
function drawMoustache() {
  //Bumpy parts in Moustache
  stroke(10)

  //Brown color
  fill(64, 28, 0);

  //Bump Arc on the very left
  arc(width/2-faceWidth/25*7, height/2+faceHeight/30, faceWidth/5.5, faceHeight/2.5, PI/2, PI/8*7);

  //Bump Arc on the very right
  arc(width/2+faceWidth/25*7, height/2+faceHeight/30, faceWidth/5.5, faceHeight/2.5, PI*2/18*18.5, PI/2);

  //Bump Arc on the center right
  arc(width/2+faceWidth/12, height/2+faceHeight/16*4.95, faceWidth/6, faceHeight/12, 0, PI);

  //Bump Arc on the center left
  arc(width/2-faceWidth/12, height/2+faceHeight/16*4.95, faceWidth/6, faceHeight/12, 0, PI);

  //Bump Arc on the left
  arc(width/2-faceWidth/12*1.95, height/2+faceHeight/16*3, faceWidth/4, faceHeight/4, PI/2, PI/8*7);

  //Bump Arc on the Right
  arc(width/2+faceWidth/12*1.95, height/2+faceHeight/16*3, faceWidth/4, faceHeight/4, PI*2/18*19, PI/2);

  //Code to fill in the moustache and to make the moustache brown
  noStroke();
  //Rectangle in the center used for filling in the moustache
    beginShape();
  //Brown colour
  fill(64, 28, 0)
    vertex(width/2+faceWidth/12*2, height/2+faceHeight/16*5);
    vertex(width/2-faceWidth/12*2, height/2+faceHeight/16*5);
    vertex(width/2-faceWidth/12*2, height/2-faceHeight/20);
    vertex(width/2+faceWidth/12*2, height/2-faceHeight/20);
    endShape(CLOSE);

  //Rectangle above the top arc to make the area skin coloured
    beginShape();
  //Colour of the skin
  fill(248, 204, 169);
    vertex(width/2-faceWidth/2.5, height/2+faceHeight/16);
    vertex(width/2+faceWidth/2.5, height/2+faceHeight/16);
    vertex(width/2+faceWidth/2.5, height/2-faceHeight/20);
    vertex(width/2-faceWidth/2.5, height/2-faceHeight/20);
    endShape(CLOSE);

  //Rectangle on the left to fill in the moustache
      beginShape();
//Brown colour
  fill(64, 28, 0);
    vertex(width/2-faceWidth/12*3.4, height/2+faceHeight/16*3.75);
    vertex(width/2+faceWidth/12*3.4, height/2+faceHeight/16*3.75);
    vertex(width/2+faceWidth/12*3.4, height/2-faceHeight/20);
    vertex(width/2-faceWidth/12*3.4, height/2-faceHeight/20);
    endShape(CLOSE);

  //Rectangle above the moustache to cover in colour fills that are coming out
    beginShape();
  //Colour of the skin
    fill(248, 204, 169);
    vertex(width/2-faceWidth/2.5, height/2+faceHeight/15);
    vertex(width/2+faceWidth/2.5, height/2+faceHeight/12.5);
    vertex(width/2+faceWidth/2.5, height/2-faceHeight/5);
    vertex(width/2-faceWidth/2.5, height/2-faceHeight/5);
    endShape(CLOSE);

//The top arc of the moustache
  stroke(10);
  fill(248, 204, 169);
    arc(width/2, height/2+faceHeight/16, faceWidth/15*11, faceHeight/4, 0, PI);

}
