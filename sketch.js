var hr, m, s;
var hrA, mA, sA;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(110, 117, 112);  
  translate(200,200)
  rotate(-90)

  push()
  hr = hour();
  m = minute();
  s = second();
  sA=map(s,0,60,0,360)
  mA=map(m,0,60,0,360)
  hrA=map(hr,12,0,12,0,360)
pop()

  push()
  rotate(sA)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(mA)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(hrA)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()

  stroke(255,0,0)
  arc(0,0,300,300,0, sA)

  stroke(0,255,0)
  arc(0,0,280,280,0,mA)

  stroke(0,0,255)
  arc(0,0,260,260,0,hrA)


  drawSprites();
}