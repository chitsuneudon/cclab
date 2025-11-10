// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 100; // Decide the initial number of particles.
let MAX_OF_PARTICLES = 1500; // Decide the maximum number of particles.
let maxrain = 700;
let particles = [];
let rain = []

let amount = 3

let speed = 5


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    Rain[i] = new Rain(random(width), random(height));
  }
}

function draw() {
  background(17, 43, 59);

  // consider generating particles in draw(), using Dynamic Array

  // update and display
  for (let i = 0; i < 100; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
  for (let i = 0; i < rain.length; i++) {
    let r = rain[i];
    r.update();
    r.display();
  }

console.log(amount)
  // limit the number of particl
  if (particles.length > MAX_OF_PARTICLES) {
    particles.splice(0, 1); // remove the first (oldest) particle
  }
  if (rain.length > maxrain){
      rain.splice(0, 1);
    }
  if(mouseIsPressed){
    for(i=0; i< amount; i++){
      rain.push(new Rain(random(width), random(-30, 10)));
    }
  } else {
      rain.splice;
  }
  if(mouseIsPressed){
    amount += 0.01
  } else {
    amount -= 0.1
  }
  if (amount<3){
    amount = 3
  }

  if(mouseIsPressed){
    speed += 0.2
  } else {
    speed -= 0.2
    }
  if(speed <= 5){
    speed = 5
  }
  if(speed > 30)
  (speed = 30)

}



class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random(1, 5);
    this.dia2 = random(10, 30);
    // this.speed = 1;
    this.num = 70
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.y += speed
    if(this.y>520){
      this.y = -10
    }
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke()
    fill(125, 155, 173)
    ellipse(0, 0, this.dia, this.dia2);

    pop();
  }
}

class Rain {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random(1, 5);
    this.dia2 = random(10, 30);
    this.speed = 1;
    this.num = 70
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.y += speed
    // if(this.y>520){
    //   this.y = -10
    // }
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke()
    fill(125, 155, 173)
    ellipse(0, 0, this.dia, this.dia2);

    pop();
  }
}
