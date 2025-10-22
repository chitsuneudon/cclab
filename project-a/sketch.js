/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let leftearX = -70
let leftearY = -60
let leftearradius = 80
let rightearX = 70
let rightearY = -60
let rightearradius = 80
var angle1;
var angle2;
let x = -85;
let x2 = 85;
let tailamplitude = 3
let cloudX = 100
let cloudY = 80
let cloudX2 = 300
let cloudY2 = 120
let cloudX3 = 500
let cloudY3 = 70
let cloudX4 = 700
let cloudY4 = 100
let speed = 3/100
let earamplitude = 3


function setup() {
  
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  // fill(255, 0 , 0)
  // circle(0, 0, 5)
  // circle(20, -30, 5)
  // circle(40, 0, 5)
}

function draw() {
  angleMode(DEGREES)
  background(195, 235, 247);
push()
  translate(0, 400)
  for(let x = -6; x <= width; x +=27){
    stroke(105, 135, 109)
    strokeWeight(2)
    fill(151, 191, 156)
    triangle(x, 0, x + 15, -15, x + 30, 0)
  }
    noStroke()
    rect(0, -1, 800, 110)
  pop()
push()
  translate(0, 440)
  for(let x = 10; x <= 100; x +=24){
    stroke(105, 135, 109)
    strokeWeight(2)
    fill(151, 191, 156)
    triangle(x, 0, x + 13, -13, x + 26, 0)
  }
    noStroke()
    rect(0, -1, 800, 110)
pop()
push()
  translate(250, 440)
  for(let x = 10; x <= 150; x +=24){
    stroke(105, 135, 109)
    strokeWeight(2)
    fill(151, 191, 156)
    triangle(x, 0, x + 13, -13, x + 26, 0)
  }
    noStroke()
    rect(0, -1, 800, 110)
pop()
push()
  translate(600, 440)
  for(let x = 10; x <= 100; x +=24){
    stroke(105, 135, 109)
    strokeWeight(2)
    fill(151, 191, 156)
    triangle(x, 0, x + 13, -13, x + 26, 0)
  }
    noStroke()
    rect(0, -1, 800, 110)
pop()
push()
  translate(125, 490)
  for(let x = 10; x <= 100; x +=24){
    stroke(105, 135, 109)
    strokeWeight(2)
    fill(151, 191, 156)
    triangle(x, 0, x + 13, -13, x + 26, 0)
  }
    noStroke()
    rect(0, -1, 800, 110)
pop()
push()
  translate(475, 490)
  for(let x = 10; x <= 100; x +=24){
    stroke(105, 135, 109)
    strokeWeight(2)
    fill(151, 191, 156)
    triangle(x, 0, x + 13, -13, x + 26, 0)
  }
    noStroke()
    rect(0, -1, 800, 110)
pop()
push()
  translate(125, 750)
  for(let x = 10; x <= 100; x +=24){
    stroke(105, 135, 109)
    strokeWeight(2)
    fill(151, 191, 156)
    triangle(x, 0, x + 13, -13, x + 26, 0)
  }
    noStroke()
    rect(0, -1, 800, 110)
pop()
  
//   clouds
push()
  // translate(100, 80)
  translate(cloudX, cloudY)
  stroke(130, 130, 130)
  fill(181, 181, 181)
  circle(-52.5, -20, 50)
  circle(-17.5, -40, 50)
  circle(17.5, -40, 50)
  circle(52.5, -20, 50)
  rect(-52.5, -20, 105, 25)
  noStroke()
  ellipse(0, -25, 125, 50)
  circle(-48, -10, 30)
  circle(48, -10, 30)
  circle(0, -50, 17)
  stroke(0)
  noFill()
  // rect(-80, -65, 160, 70)
  // rect(-80, -65, 320, 140)
pop()
push()
  // translate(100, 80)
  translate(cloudX2, cloudY2)
  stroke(130, 130, 130)
  fill(181, 181, 181)
  circle(-52.5, -20, 50)
  circle(-17.5, -40, 50)
  circle(17.5, -40, 50)
  circle(52.5, -20, 50)
  rect(-52.5, -20, 105, 25)
  noStroke()
  ellipse(0, -25, 125, 50)
  circle(-48, -10, 30)
  circle(48, -10, 30)
  circle(0, -50, 17)
  stroke(0)
  noFill()
  // rect(-80, -65, 160, 70)
  // rect(-80, -65, 320, 140)
pop()
push()
  // translate(100, 80)
  translate(cloudX3, cloudY3)
  stroke(130, 130, 130)
  fill(181, 181, 181)
  circle(-52.5, -20, 50)
  circle(-17.5, -40, 50)
  circle(17.5, -40, 50)
  circle(52.5, -20, 50)
  rect(-52.5, -20, 105, 25)
  noStroke()
  ellipse(0, -25, 125, 50)
  circle(-48, -10, 30)
  circle(48, -10, 30)
  circle(0, -50, 17)
  stroke(0)
  noFill()
  // rect(-80, -65, 160, 70)
  // rect(-80, -65, 320, 140)
pop()
push()
  // translate(100, 80)
  translate(cloudX4, cloudY4)
  stroke(130, 130, 130)
  fill(181, 181, 181)
  circle(-52.5, -20, 50)
  circle(-17.5, -40, 50)
  circle(17.5, -40, 50)
  circle(52.5, -20, 50)
  rect(-52.5, -20, 105, 25)
  noStroke()
  ellipse(0, -25, 125, 50)
  circle(-48, -10, 30)
  circle(48, -10, 30)
  circle(0, -50, 17)
  stroke(0)
  noFill()
  // rect(-80, -65, 160, 70)
  // rect(-80, -65, 320, 140)
pop()  
  //fox
  translate(400, 250)
  stroke(176, 168, 167)
  
//   tail
  push()
  let tailanimate = sin(frameCount * tailamplitude) * 9
    translate(-45, 150)
    rotate(tailanimate)
    beginShape()
      curveVertex(0, 0)
      curveVertex(0, 0)
      curveVertex(0, 0)
      curveVertex(-37, -9)
      curveVertex(-64, -23)
      curveVertex(-80, -33)
      curveVertex(-89, -50)
      curveVertex(-98, -71)
      curveVertex(-99, -93)
      curveVertex(-96, -115)
      curveVertex(-91, -140)
      curveVertex(-116, -130)
      curveVertex(-129, -117)
      curveVertex(-137, -103)
      curveVertex(-141, -94)
      curveVertex(-144, -102)
      curveVertex(-145, -92)
      curveVertex(-145, -88)
      curveVertex(-143, -80)
      curveVertex(-149, -87)
      curveVertex(-149, -80)
      curveVertex(-148, -68)
      // curveVertex(-147, -47)
      curveVertex(-138, -28)
      // curveVertex(-125, -18)
      curveVertex(-111, -8)
      curveVertex(-87, -2)
      curveVertex(-57, 1)
      curveVertex(-36, 2)
      curveVertex(0, 0)
      curveVertex(0, 0)
    endShape()
    fill(235, 64, 52)
    beginShape()
      curveVertex(-98, -71)
      curveVertex(-99, -93)
      curveVertex(-96, -115)
      curveVertex(-91, -140)
      curveVertex(-116, -130)
      curveVertex(-129, -117)
      curveVertex(-137, -103)
      curveVertex(-141, -94)
      curveVertex(-144, -102)
      curveVertex(-145, -92)
      curveVertex(-145, -88)
      curveVertex(-143, -80)
      curveVertex(-149, -87)
      curveVertex(-149, -80)
      curveVertex(-148, -68)
      curveVertex(-139, -54)
      curveVertex(-132, -64)
      curveVertex(-124, -55)
      curveVertex(-116, -69)
      curveVertex(-110, -57)
      curveVertex(-105, -70)
      curveVertex(-95, -60)
      curveVertex(-95, -60)
    endShape()
  pop()
  
  //body
  push()
    translate(0, 200)
    // fill(255, 0 , 0)
    // circle(-50, -150, 5)
    // circle(-66, -122, 5)
    // circle(-75, -95, 5)
    // circle(-82, -60, 5)
    // circle(-80, -25, 5)
    // circle(-46, -7, 5)
    // circle(0, 0, 5)
    // circle(66, -122, 5)
    // circle(50, -150, 5)
    fill(255)
    beginShape()
      curveVertex(-50, -150)
      curveVertex(-66, -122)
      curveVertex(-75, -95)
      curveVertex(-82, -60)
      curveVertex(-74, -30)
      curveVertex(-46, -7)
      curveVertex(0, 0)
      curveVertex(46, -7)      
      curveVertex(74, -30)
      curveVertex(82, -60)
      curveVertex(75, -95)
      curveVertex(66, -122)
      curveVertex(50, -150)
      curveVertex(21, -150)
      curveVertex(0, -153)
      curveVertex(-21, -150)
    endShape(CLOSE)
  pop()
  
  //head
  ellipse (0, 0, 180, 140)
    
//   blush
  push()
    noStroke()
    fill(255, 224, 234)
    ellipse(-49, 25, 25, 10)
    ellipse(49, 25, 25, 10)
  pop()
  //   face fur
//   left
  push()
    translate(-82, 15)
    beginShape()
      curveVertex(-7, -12)
      curveVertex(-7, -12)
      curveVertex(-14, -7)
      curveVertex(-17, -4)
      curveVertex(-10, -1)
      curveVertex(-16, 3)
      curveVertex(-7, 4)
      curveVertex(-8, 6)
      curveVertex(-12, 10)
      curveVertex(-7, 10)
      curveVertex(-1, 12)
      curveVertex(-1, 12)
    endShape()
  pop()
//   right
  push()
    translate(82, 15)
    beginShape()
      curveVertex(7, -12)
      curveVertex(7, -12)
      curveVertex(14, -7)
      curveVertex(17, -4)
      curveVertex(10, -1)
      curveVertex(16, 3)
      curveVertex(7, 4)
      curveVertex(8, 6)
      curveVertex(12, 10)
      curveVertex(7, 10)
      curveVertex(1, 12)
      curveVertex(1, 12)
    endShape()
  pop()
  earamplitude = constrain(earamplitude, 3, 20)
  let dleft = dist(mouseX, mouseY, 330, 190)
  let dright = dist(mouseX, mouseY, 470, 190)
      if (mouseIsPressed ===  true){
        if(dleft < 80 && dright > 80){
    earamplitude = earamplitude + speed
        }
      }else{
        if(earamplitude >= 3){
     earamplitude = 3
        }
        if (earamplitude <= 3){
          earamplitude = 3
        }
  }
  
  
  push()
    let rotateAnimate = sin(frameCount * earamplitude) * 5
    rotate(rotateAnimate)
    drawLeftear()
  pop()
  
  push()
    rotate(-rotateAnimate)
    drawRightear()
  pop()
  
  
  //eyes
  
  push()
    noStroke()
    translate(-45, 5)
    fill(252, 58, 61)
    rotate(20)
    ellipse(0, 0, 20, 25)
    fill(255)
    circle(1, -2, 23)
  pop()
  
  push()
    noStroke()
    translate(45, 5)
    fill(252, 58, 61)
    rotate(300)
    ellipse(0, 0, 20, 25)
    fill(255)
    circle(1, -2, 23)
  pop()
  
  push()
    noStroke()
    translate(-40, 0)
    rotate(300)
    fill(252, 58, 61)
    ellipse(0, -3, 25, 20)
    fill(0)
    ellipse(0, 0, 25, 20)
  pop()
  
  push()
    noStroke()
    translate(40, 0)
    rotate(60)
    fill(252, 58, 61)
    ellipse(0, -3, 25, 20)
    fill(0)
    ellipse(0, 0, 25, 20)
  pop()
  
// nose
  push()
    translate(0, 15)
    fill(0)
    beginShape()
    curveVertex(-3, 13)
    curveVertex(0,  14)
    curveVertex(3, 13)
    curveVertex(9, 9)
    // curveVertex(10, 8)
    // curveVertex(12, 5)
    curveVertex(8, 3)
    curveVertex(-8, 3)
    // curveVertex(-12, 5)
    // curveVertex(-10, 8)
    curveVertex(-9, 9)
    // curveVertex(0, 20)
    endShape(CLOSE)
  pop()
  
  // paws
  push()
    translate(0, 200)
    fill(255)
  
//  left paw 
    beginShape()
      curveVertex(0, -35)
      curveVertex(0, -35)
      curveVertex(-9, -1)
      curveVertex(-32, -2)
      curveVertex(-41, -35)
      curveVertex(-41, -35)
    endShape()
    beginShape()
      curveVertex(-29, -8)
      curveVertex(-29, -8)
      curveVertex(-28, -4)
      curveVertex(-26, 1)
      curveVertex(-26, 1)
    endShape()
    beginShape()
      curveVertex(-20, -8)
      curveVertex(-20, -8)
      curveVertex(-19, 2)
      curveVertex(-19, 2)
    endShape()
    beginShape()
      curveVertex(-12, -8)
      curveVertex(-12, -8)
      curveVertex(-12, -4)
      curveVertex(-13, 1)
      curveVertex(-13, 1)
    endShape()
  
  
// right paw  
  beginShape()
      curveVertex(0, -35)
      curveVertex(0, -35)
      curveVertex(9, -1)
      curveVertex(32, -2)
      curveVertex(41, -40)
      curveVertex(41, -40)
    endShape()
    beginShape()
      curveVertex(29, -8)
      curveVertex(29, -8)
      curveVertex(28, -4)
      curveVertex(26, 1)
      curveVertex(26, 1)
    endShape()
    beginShape()
      curveVertex(20, -8)
      curveVertex(20, -8)
      curveVertex(19, 2)
      curveVertex(19, 2)
    endShape()
    beginShape()
      curveVertex(12, -8)
      curveVertex(12, -8)
      curveVertex(12, -4)
      curveVertex(13, 1)
      curveVertex(13, 1)
    endShape()
  pop()
  
  
// push()
//   noFill()
//   stroke(0)
//   ellipse(leftearX, leftearY, leftearradius)
//   ellipse(rightearX, rightearY, rightearradius)
//   fill(255, 0, 0)
//   circle(rightearX, rightearY, 5)
// pop()
  
    console.log(mouseX, mouseY, speed, earamplitude)

}

function drawLeftear(){
    // rotate(angle1)
    noStroke()
    // translate(445, 170)
    fill(255)
     let leftear = triangle(x, -90, -83, -24, -35, -60)
     fill(235, 64, 52)
     let leftear1 = triangle(-85, -19, x, -90, -61, -43 )
     }
function drawRightear(){
    noStroke()
  fill(255)
    let rightear = triangle(x2, -90, 35, -60, 83, -27)
    fill(235, 64, 52)
    let leftear2 = triangle(85, -19, x2, -90, 61, -43 )
}

function mousePressed(){
  if(mouseX>cloudX-80){
    if(mouseX<cloudX+80){
      if(mouseY>cloudY-66){
        if(mouseY<cloudY+5){
        cloudX = random(80, 250)
        cloudY = random(50, 150)
          }
        }
      }
    }
    if(mouseX>cloudX2-80){
    if(mouseX<cloudX2+80){
      if(mouseY>cloudY2-66){
        if(mouseY<cloudY2+5){
        cloudX2 = random(250, 500)
        cloudY2 = random(50, 150)
          }
        }
      }
    }
    if(mouseX>cloudX3-80){
    if(mouseX<cloudX3+80){
      if(mouseY>cloudY3-66){
        if(mouseY<cloudY3+5){
        cloudX3 = random(500, 700)
        cloudY3 = random(50, 150)
          }
        }
      }
    }
  if(mouseX>cloudX4-80){
    if(mouseX<cloudX4+80){
      if(mouseY>cloudY4-66){
        if(mouseY<cloudY4+5){
        cloudX4 = random(600, 800)
        cloudY4 = random(50, 150)
          }
        }
      }
    }
}
