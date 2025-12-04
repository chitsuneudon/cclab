// let myInput;
// let nameEnter;
let song;

let img1
let img2
let eyes1;
let eyes2;
let lookaway1;
let lookaway2;
let angry1;
let angry2;

let animate = true
let frame = false
let speech = false

let defaultMood = false

let nuetralmood = false;
let angrymood = false
let lookawaymood = false

let bedroom;
let bedroomStageIntro = false;
let livingroomStage = false
let livingroom;

let starting = true
let floating;

let stage1 = true
let stage2 = false;

// let nuetralface;
let oStart = 255

let startdelay = 0
let currentMessage = 0
let index = 0
let typingSpeed =  65
let lastTyped = 0
let introspeech = true

let box
let drawerText = false
let drawermsg = [
  "Hey !",
  "Those are my clothes . . .",
  "Please DON'T take them . . .       "
]
let outsideText = false
let outsidemsg = [
  ". . .",
  "um . . . . . .",
  "you want to go outside ?",
  ". . . . . . . well I don't .        "
]
let lightText = false
let lightmsg = [
  "you want to turn the lights on ?",
  ". . . . . hmmmmm . . .",
  "No . I don't think I will .        "
]
let livingRoomText = false
let livingRoommsg = [
  "Hey ! Stay in THIS room !       "
]
let girlText = false
let girlmsg = [
  "Ouch !         ",
  "Hey ! Be careful . . .         ",
  "um . . . I said feel free to look around the ROOM .          ",
  "can I help you . . .           ",
  "Excuse you .              ",
  "I'm going to kick you out if you do that again .              "
]
let clockText = false
let clockmsg = [
  "um . . . why don't you just check your phone . . .         "
]

let messages = [
  'Oh . . . !',
  'hey there . . . !',
  'this is my room .',
  '. . .',
  "it's not much . . . . but feel free to look around !"
]



// let face = [];
// let mood = []
// let frame1 = []
// let frame2 = []

// let nameisEntered = false

 
function preload(){
  // mood[0] = nuetral
  // mood[1] = angry
  // mood[2] = lookaway

  song = createAudio("assets/sounds/arabasque.mp3")
  img1 = loadImage("assets/f1.png")
  img2 = loadImage("assets/f2.png")

  eyes1 = loadImage("assets/eyes1.png")
  eyes2 = loadImage("assets/eyes2.png")

  angry1 = loadImage("assets/angry1.png")
  angry2 = loadImage("assets/angry2.png")

  lookaway1 = loadImage("assets/lookaway1.png")
  lookaway2 = loadImage("assets/lookaway2.png")

  bedroom = loadImage("assets/bedroom.jpg")
  livingroom = loadImage("assets/living room.jpg")
}

function setup() {
  // rectMode(CENTER)
  let canvas = createCanvas(windowWidth, 1000);
  canvas.parent("p5-canvas-container");
  box = new Textbox(width/2, height/2+width*0.195)
    // for (let i=0; i<3; i++) {
    // face.push(new Face(width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, frame1[i], frame2[i]))
    // for(let i=0; i<3; i++){
    // frame1.push[i]
    // frame2.push[i]
  }

  // }
  // console.log(mood, frame1, frame2)
  // face = new Face(width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, frame1[i], frame2[i])

  
function draw() {
  background(220);
  noStroke()
  // drawers
  let dx = width*0.845
  let dy = height/2-width*0.09
  let dw = width*0.15
  let dh = width*0.07
  let drawerX = dist(mouseX, 0, dx, 0)
  let drawerY = dist(mouseY, 0, dy, 0)

  // door left
  let ox = width*0.16
  let oy = height/2+width*0.05
  let ow = width*0.24
  let oh = width*0.3
  let outsideX = dist(mouseX, 0, ox, 0)
  let outsideY = dist(mouseY, 0, oy, 0)

  // lights 
  let lx = width*0.6
  let ly = height/2-width*0.16
  let lw = width*0.13
  let lh = width*0.05
  let lightX = dist(mouseX, 0, lx, 0)
  let lightY = dist(mouseY, 0, ly, 0)

  // door right
  let rx = width*0.97
  let ry = height/2
  let rw = width*0.08
  let rh = width * 0.6
  let livingRoomX = dist(mouseX, 0, rx, 0)
  let livingRoomY = dist(mouseY, 0, ry, 0)

  // clock
  let cx = width*0.72
  let cy = height/2-width*0.04
  let cw = width*0.055
  let ch = width*0.05
  let clockX = dist(mouseX, 0, cx, 0)
  let clockY = dist(mouseY, 0, cy, 0)

  //girl
  // ellipse
  let gx = width/2 + width*0.02
  let gy = height/2
  let gw = width*0.25
  let gh = width*0.3
  let girlX = mouseX - gx
  let girlY = mouseY - gy
  let girlhr = gw/2
  let girlvr = gh/2


    //starting slide
    floating = sin(frameCount * 0.09) * height*0.01
    let floating2 = sin(frameCount * 0.09)* height* 0.005
    if(starting){
      fill(10)
      rect(width/2-windowWidth/2, height/2-windowWidth*0.55/2, windowWidth, windowWidth*0.55)
      nuetralmood = false
      defaultMood = false
      bedroomStage = false
      push()
      textAlign(CENTER)
      // strokeWeight(10)
      textSize(width*0.08)
      textFont("Annie Use Your Telescope")
      fill(255)
      text("Game Starting", width/2, height/2 + floating)
      textSize(width*0.03)
      text("click anywhere to start", width/2, height/1.6+floating2)
      pop()
    if(introspeech){
      if(mouseIsPressed){
        starting = false
        song.loop()
        stage2 = true

        stage2 = true

        bedroomStageIntro = true
        startdelay = millis() + 2000
        }
    }
  }


    if(bedroomStageIntro == true){
      image(bedroom, width/2-windowWidth/2, height/2-windowWidth*0.55/2, windowWidth, windowWidth*0.55)
      defaultMood = true
      nuetralmood = true
      if (introspeech && millis() > startdelay){     
        box.display()
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        text(messages[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < messages[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === messages[currentMessage].length && currentMessage < messages.length - 1){
          if(millis()-lastTyped > 700){
            currentMessage++
            index = 0
            lastTyped = millis()
          }
        }
      }
        if(currentMessage === messages.length - 1 && index === messages[currentMessage].length){
        introspeech = false
        }
      
      if (mouseIsPressed && introspeech == false){
        if (drawerX <= dw/2 && drawerY <= dh/2) {
          drawerText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          livingRoomText = false
          clockText = false
          girlText = false
          livingRoomText = false
        }
        if (outsideX <= ow/2 && outsideY <= oh/2){
          outsideText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          lightText = false
          clockText = false
          girlText = false
          drawerText = false
          livingRoomText = false
        }
        if( lightX <= lw/2 && lightY <= lh/2){
          lightText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          clockText = false
          girlText = false
          drawerText = false
          livingRoomText = false
        }
        if(livingRoomX <= rw/2 && livingRoomY <= rh/2){
          livingRoomText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          clockText = false
          girlText = false
          drawerText = false
        }
        if(clockX <= cw/2 && clockY <= ch/2){
          clockText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
        }
        if((girlX*girlX)/(girlhr*girlhr)+(girlY*girlY)/(girlvr*girlvr)<= 1){
          girlText = true
          currentMessage = floor(random(girlmsg.length))
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          clockText = false
          drawerText = false
          livingRoomText = false
        }
      }
    if(drawerText){
        nuetralmood = false
        angrymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(drawermsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < drawermsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === drawermsg[currentMessage].length && currentMessage < drawermsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
          }
          }
          if(currentMessage === drawermsg.length - 1 && index === drawermsg[currentMessage].length){
          drawerText = false
          angrymood = false
          nuetralmood = true
          
          
      }
    }
    if(outsideText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(outsidemsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < outsidemsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === outsidemsg[currentMessage].length && currentMessage < outsidemsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
          }
          }
          if(currentMessage === outsidemsg.length - 1 && index === outsidemsg[currentMessage].length){
          outsideText = false
          lookawaymood = false
          nuetralmood = true
          }
        }
    
    if(lightText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(lightmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < lightmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === lightmsg[currentMessage].length && currentMessage < lightmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
          }
        }
        if(currentMessage === lightmsg.length - 1 && index === lightmsg[currentMessage].length){
          lightText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(livingRoomText){
        nuetralmood = false
        angrymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(livingRoommsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < livingRoommsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === livingRoommsg[currentMessage].length && currentMessage < livingRoommsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
          }
        }
        if(currentMessage === livingRoommsg.length - 1 && index === livingRoommsg[currentMessage].length){
          livingRoomText = false
          angrymood = false
          nuetralmood = true
          }
      
    }
    if(clockText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(clockmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < clockmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === clockmsg[currentMessage].length && currentMessage < clockmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === clockmsg.length - 1 && index === clockmsg[currentMessage].length){
          clockText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(girlText){
      angrymood = true
      nuetralmood = false
      let msg = girlmsg[currentMessage];
      box.display()

      stroke(255)
      // strokeWeight(10)
      textSize(width*0.03)
      textFont("Annie Use Your Telescope")
      fill(255)
     text(msg.substring(0, index), width * 0.2, height/2 + width * 0.2);

        if (millis() - lastTyped > typingSpeed && index < msg.length) {
            index++;
            lastTyped = millis();
          }
      if (index === msg.length){
          girlText = false
          angrymood = false
          nuetralmood = true
          }
        }
    
    
    

    // top drawers
    // push()
    //   rectMode(CENTER)
    //   stroke(255)
    //   strokeWeight(2)
    //   noFill()
    //   rect(width*0.845, height/2-width*0.09, width*0.15, width*0.07)
    //   pop()
    // // outside left
    //   push()
    //   rectMode(CENTER)
    //   stroke(255)
    //   strokeWeight(2)
    //   noFill()
    //   rect(width*0.16, height/2+width*0.05, width*0.24, width*0.3)
    //   pop()
      
    //   // girl
    //   push()
    //   noFill() 
    //   strokeWeight(2)
    //   stroke(255)
    //   ellipse(width/2 + width*0.02, height/2, width*0.25, width*0.3)
    //   pop()

    //   // lights
    //   push()
    //   rectMode(CENTER)
    //   stroke(255)
    //   strokeWeight(2)
    //   noFill()
    //   rect(width*0.6, height/2-width*0.16, width*0.13, width*0.05)
    //   pop()

    //   // door to living room
    //   push()
    //   rectMode(CENTER)
    //   stroke(255)
    //   strokeWeight(2)
    //   noFill()
    //   rect(width*0.97, height/2, width*0.08, width*0.6)
    //   pop()

    //   // clock
    //   push()
    //   rectMode(CENTER)
    //   stroke(255)
    //   strokeWeight(2)
    //   noFill()
    //   rect(width*0.72, height/2-width*0.04, width*0.055, width*0.05)
    //   pop()

      // // guitar and amp
      // push()
      // rectMode(CENTER)
      // stroke(255)
      // strokeWeight(2)
      // noFill()
      // rect(width*0.42, height/2+width*0.17, width*0.13, width*0.055)
      // pop()

      // // table and chairs      
      // push()
      // rectMode(CENTER)
      // stroke(255)
      // strokeWeight(2)
      // noFill()
      // rect(width*0.72, height/2+width*0.175, width*0.27, width*0.08)
      // pop()
      // I REALIZED THAT THE FRICKING TEXTBOX COVERS THESE LOL OOPS

  
  } else {
    bedroom.hide
  }
      // BODY
if (defaultMood){
    if (frameCount % 40 == 0) {
      animate = true
    }
    if (frameCount % 40 == 20){
      animate = false
      }

      // BODY
    if(animate == true){
      image(img1, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
       if (nuetralmood){
        image(eyes1, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
       }
       if (angrymood){
        image(angry1, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
       }
       if (lookawaymood){
        image(lookaway1, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
       }

    } 
    if(animate == false) {
      image(img2, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
      if (nuetralmood){
        image(eyes2, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
       }
       if (angrymood){
        image(angry2, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
       }
       if (lookawaymood){
        image(lookaway2, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
       }
    }
  }


    if(stage2){
    let oFinal = 0
        oStart = lerp(oStart, oFinal, 0.03)
        fill(0, oStart);
        rect(0,0,width,height)
        if(oStart<=10){
          stage2 = false
          oStart = 255

      }
    }
  }

// push()
// if(textbox){
// rectMode(CENTER)
// fill(0)
// noStroke()
// rect(width/2, height/2+width*0.18, width*0.7, width*0.13)
// fill(255)
// rect(width/2, height/2+width*0.18, width*0.685, width*0.12)
// fill(0)
// rect(width/2, height/2+width*0.18, width*0.675, width*0.112)

// pop()





// function mousePressed(){
//   // everytime mouse is pressed black screen fade in and out
// stage2 = true
// }
class Textbox{
  constructor(startX, startY){
    this.x = startX
    this.y = startY
  }
  display(){
    push()
    rectMode(CENTER)
    fill(0)
    noStroke()
    rect(this.x, this.y, width*0.7, width*0.13)
    fill(255)
    rect(this.x, this.y, width*0.685, width*0.12)
    fill(0)
    rect(this.x, this.y, width*0.675, width*0.112)
    pop()
  }

}

// class Face 
//   constructor(startX, startY, frame1, frame2) {
//     this.x = startX;
//     this.y = startY;
//     this.currentFrame = 0;
//     this.frame1 = frame1
//     this.frame2 = frame2
//   }
//   animate(){
//     if (frameCount % 40 == 0) {
//       this.currentFrame = this.frame1
//     }
//     if (frameCount % 40 == 20) {
//      this.currentFrame = this.frame2
//     }
//    image(this.currentFrame, this.x, this.y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   }
// }


// class Face {
//   constructor(startX, startY){
//     this.X = startX
//     this.Y = startY
//     this.currentFrame
//     this.body1 = img1
//     this.body2 = img2
//     this.eyes1 = eyes1
//     this.eyes2 = eyes2
//     this.angry1 = angry1
//     this.angry2 = angry2
//     this.lookaway1 = lookaway1
//     this.lookaway2 = lookaway2
//     this.nuetral = nuetral
//     this.otherway = false
//     this.anger = false
//     this.nMood1
//     this.nMood2
//     this.nMoodState = false
//     this.aMood1
//     this.aMood2
//     this.lMood1
//     this.lMood2
//     this.aMoodState = false
//     this.lMoodState = false
//     this.frame = frame
//     this.default1
//     this.default2
//     this.dState = true
//   }
// display(){
//   // this.default1 = image(this.img1, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   // this.default2 = image(this.img2, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)



//   // this.nMood1 = image(this.eyes1, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   // this.nMood2 = image(this.eyes2, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   // this.aMood1 = image(this.angry1, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   // this.aMood2 = image(this.angry2, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   // this.lMood1 = image(this.lookaway1, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   // this.lMood2 = image(this.lookaway2, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   this.default1 = image(this.currentFrame, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   this.default2 = image(this.currentFrame, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)



//   this.nMood1 = image(this.currentFrame, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   this.nMood2 = image(this.currentFrame, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   this.aMood1 = image(this.currentFrame, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   this.aMood2 = image(this.currentFrame, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   this.lMood1 = image(this.currentFrame, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
//   this.lMood2 = image(this.currentFrame, this.X, this.Y, windowWidth * 0.315, windowWidth*0.55 * 0.8)
// }
//   update(){
// if (frameCount % 40 == 0) {
//         this.frame = true
//       }
//     if (frameCount % 40 == 20){
//       this.frame = false
//       }

// if(frame == true){
//   this.dMood1()
//   this.nMood1()
//   this.aMood1()
//   this.lMood1()
// }
// if(frame == false){
//   this.dMood2()
//   this.nMood2()
//   this.aMood2()
//   this.lMood2()
// }
  

  //   if(this.dState == true){
  //     if(this.frame = true){
  //       this.default1()
  //     } else {
  //       this.default2()
  //     }

  //    if(this.nuetral == true){
  //     this.nMoodState = true
  //     this.aMoodState = false
  //     this.lMoodState = false
  //     this.anger = false
  //     this.lookaway = false
  //   }
  //   if(this.anger == true){
  //     this.aMoodState = true
  //     this.nMoodState = false
  //     this.lMoodState = false
  //     this.nuetral = false
  //     this.lookaway = false
  //   }
  //   if(this.lookaway == true){
  //     this.lMoodState = true
  //     this.aMoodState = false
  //     this.nMoodState = false
  //     this.nuetral = false
  //     this.anger = false
  //   }

  //   if(this.nMoodState == true){
  //     if (frameCount % 40 == 0) {
  //       this.frame = true
  //     }
  //   if (frameCount % 40 == 20){
  //     this.frame = false
  //     }
  //     if(this.frame == true){
  //     this.nMood1()
  //     } else {
  //     this.nMood2()
  //     }
//     }
//     if(this.aMoodState == true){
//       if (frameCount % 40 == 0) {
//         this.frame = true
//       }
//     if (frameCount % 40 == 20){
//       this.frame = false
//       }
//       if(this.frame == true){
//       this.aMood1()
//       } else {
//       this.aMood2()
//       }
//     }
//     if(this.lMoodState == true){
//       if (frameCount % 40 == 0) {
//         this.frame = true
//       }
//     if (frameCount % 40 == 20){
//       this.frame = false
//       }
//       if(this.frame == true){
//       this.lMood1()
//       } else {
//       this.lMood2()
//       }
//     }
//   }
// }
// }

  





// class Name {
//   constructor(startX, startY){
//     this.startX = startX
//     this.startY = startY
//     this.name = "";
//     this.nameInput = createInput();
//     this.nameInput.position(this.startX, this.startY)
//     this.nameInput.size(200, 50)
//     this.submit = createButton('Done !')
//     this.submit.position(width/2, height/2)
//   }
//   Input(){
//     this.name = this.nameInput.value();
//   }
//   display(){
//     if(this.submit.mousePressed()){
//       this.Input();
//       this.nameInput.hide()
//        if(this.name !== ""){
//       text("Hi ${this.name} !", this.startX, this.startY)
//         }
//        } else {
//         fill(0)
//         text("Hey there ! What is your name ?", 400, 500)
//     }
//   }

// }

// class Wanderer {
//   constructor(startx, startY){
//     this.startX = startX
//     this.startY = startY

//   }
//   display(){
//     //image
//   }
  
// }
