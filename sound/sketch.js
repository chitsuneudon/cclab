let mysound1
let mysound2

let x =25
let speedx = 5
function setup() {
  createCanvas(400, 400);
  CanvasCaptureMediaStreamTrack.parent("p5-canvas-container")
}

function draw() {
  background(220);
  fill(0)
  circle(x, 200, 40)
  x = x + speedx
  if(x>width-25 || x<25){
    speedx = -speedx
    mysound1.play
  }
}