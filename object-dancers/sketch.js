/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new ChristinaDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class ChristinaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.angle = 0
    this.lEAr = 0
    this.rEar = 0
    this.spd = 5
    this.arm = 0
    this.jump = 0
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.angle = sin(frameCount * 3) * 10
    this.lEar = sin (frameCount * this.spd) * 10
    this.rEar = -sin(frameCount * this.spd) * 9
    this.jump = cos(frameCount * 6) * 100
    this.arm = sin(frameCount * -6) * 6
  }    
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    console.log(this.active, frameCount)
    translate(this.x, this.y);
    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    angleMode(DEGREES)
    push()
    translate(0, 50)
    translate(0, this.jump)
    rotate(this.angle)
      push()
        translate(2, -150)
        rotate(2)
        fill(255)
        push()
        rotate(this.arm)
        beginShape()
          curveVertex(-13, 34)
          curveVertex(-13, 34)
          curveVertex(-28, 49)
          curveVertex(0, 53)
          curveVertex(0, 53)
        endShape()
        pop()
        beginShape()
          curveVertex(-16, 53)
          curveVertex(-16, 53)
          curveVertex(-20, 72)
          curveVertex(-17, 74)
          curveVertex(0, 70)
          curveVertex(17, 74)
          curveVertex(20, 72)
          curveVertex(16, 53)
          curveVertex(16, 53)
        endShape()
        push()
        rotate(-this.arm)
        beginShape()
          curveVertex(0, 53)
          curveVertex(0, 53)
          curveVertex(28, 49)
          curveVertex(17, 34)
          curveVertex(17, 34)
        endShape()
        pop()
        push()
          noStroke()
          fill(255)
          beginShape()
            curveVertex(-13, 34)
            curveVertex(-15, 53)
            curveVertex(15, 53)
            curveVertex(13, 34)
          endShape(CLOSE)
        pop()
      pop()
    push()
      translate(5, -165)
      rotate(2)
      push()
        stroke(0)
        strokeWeight(1)
        ellipse(0, 0, 130, 110)
      pop()
      push() 
        translate(-35, 15)
        push()
        rotate(55)
        fill(0)
        ellipse(0, 0, 40, 35)
        pop()
        fill(255)
        circle(-7, -7, 18)
        circle(6, 11, 10)
        noStroke()
        fill(255, 217, 247)
        ellipse(-20, 10, 13, 5)
      pop()
      push()
        translate(35, 15)
        push()
        rotate(305)
        fill(0)
        ellipse(0, 0, 40, 35)
        pop()
        fill(255)
        circle(7, -7, 18)
        circle(-6, 11, 10)
        noStroke()
        fill(255, 217, 247)
        ellipse(20, 10, 13, 5)
      pop()
      push()
        rotate(this.rEar)
        translate(0, -50)
        rotate(4)
        fill(255)
        beginShape()
          curveVertex(31, 4)
          curveVertex(31, 4)
          curveVertex(43, -3)
          curveVertex(63, -10)
          curveVertex(65, 10)
          curveVertex(61, 28)
          curveVertex(61, 28)
          endShape()
      pop()

      push()
        rotate(this.lEar)
        translate(0, -50)
        rotate(-4)
        fill(255)
        beginShape()
          curveVertex(-31, 4)
          curveVertex(-31, 4)
          curveVertex(-43, -3)
          curveVertex(-63, -10)
          curveVertex(-65, 10)
          curveVertex(-61, 28)
          curveVertex(-61, 28)
        endShape()
      pop()
      
    pop()
    push()
        translate(0, -218)
        noFill()
        stroke(117, 115, 114)
        strokeWeight(3)
        beginShape()
          curveVertex(8, 0)
          curveVertex(8, 0)
          curveVertex(6, 23)
          curveVertex(6, 23)
        endShape()
        beginShape()
          curveVertex(-11, 1)
          curveVertex(-11, 1)
          curveVertex(-11, 20)
          curveVertex(-11, 20)
        endShape()
        beginShape()
          curveVertex(23, 2)
          curveVertex(23, 2)
          curveVertex(21, 22)
          curveVertex(21, 22)
        endShape()
      pop()

    console.log(mouseX-283, mouseY-377)
    pop()


    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/