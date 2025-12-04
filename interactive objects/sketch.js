let ball = [];
let num = 1;
let song;
let interacted = false;

function preload(){
  song = loadSound("assets/sounds (1)/song.mp3")
  beep = loadSound("assets/sounds (1)/beat.mp3")
}
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  for(i =0; i< num; i++){
    ball.push(new Ball(width/2, height/2))
  }
  console.log(ball)
}

function draw() {
  background(220)
  if(interacted){
    for(i=0; i<ball.length; i++){
    ball[i].update()
    ball[i].display()
    ball[i].checkEdges
    ball[i].checkMouse
  }
  textSize(24)
  text("number of balls" + ball.length, width/2, 20)
  } else {
    textAlign(CENTER)
    textSize(40)
    text("click me to interact !", width/2, height/2)
  }

  for(let i = ball.length - 1; i>=0; i--){
    let b = ball[i]
    if(b.isDone){
      ball.splice(i, 1)
    }
  }
}

function mousePressed(){
  if(!interacted){
    song.play()
    interacted = true
  }
}

  function keyPressed(){
        ball.push(new Ball(mouseX, mouseY))

  }

class Ball{
 constructor(startX, startY){
   this.x = startX;
   this.y = startY;
   this.xSpeed = random(-3, 3);
   this.ySpeed = random(-1, 1);
   this.size = random(20, 50)
   this.col = color(0,0,0)
  this.isDone = false
 }
 update(){
   this.x += this.xSpeed;
   this.y += this.ySpeed;
   this.checkEdges()
   this.checkMouse()
 }
 checkEdges(){
  if(this.x > width || this.x < 0){
    this.xSpeed = -this.xSpeed
    beep.play();
  }
  if(this.y > height || this.y < 0){
    this.ySpeed= -this.ySpeed
    beep.play()
  }
}
  checkMouse() {
    let d = dist(mouseX, mouseY, this.x, this.y)
    if(d < this.size / 2){
      //mouse is in
      if(mouseIsPressed){
        this.isDone = true
      }

      this.col = color(255, 255, 0)
    } else {
      this.col = color (0, 0, 0)
    }
  }
 

 display(){
   push();
   translate(this.x, this.y);
   fill(this.col);
   noStroke();
   circle(0, 0, this.size)
   pop();
 }
}
