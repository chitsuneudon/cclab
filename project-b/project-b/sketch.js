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

let frame1 = [eyes1, lookaway1, angry1]
let frame2 = [eyes2, lookaway2, angry2]
let face = []

let animate = true
let frame = false
let speech = false

let defaultMood = false

let nuetralmood = false;
let angrymood = false
let lookawaymood = false

let bedroom;
let bedroomStageIntro = false;
let bedroomlightStage = false
let bedroomlight;
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
let ampText = false 
let ampmsg = [
  "my guitar ?",
  "I don't think I can play that well . . .       "
]
let tableText = false
let tablemsg = [
  "you want to sit ?",
  "sorry . . . these are the only chairs I have      "
]
let globeText = false
let globemsg = [
  "no . . . I haven't really travelled the world      "
]
let posterText = false
let postermsg = [
  "ah . . . that's my favorite artist .",
  "do you know Lily Chou-Chou ?      "
]
let lbooksText = false
let lbooksmsg = [
  "study huh . . .",
  "it's not really my thing       "
]
let hbooksText = false
let hbooksmsg = [
  "i don't know why i have so many books . . .",
  "they just seem to pile up      "
]
let cdsText = false
let cdsmsg = [
  "my CD collection ! ! !",
  "it has all my favorite artists",
  "Mass of the Fermenting Dregs . . . Kenshi Yonezu-",
  "I'll stop rambling . . .        "
]
let groupText = false
let groupmsg = [
  "that's a poster of one of my favorite bands !",
  "I got it from one of their concerts        "
]
let wardrobeText = false
let wardrobemsg = [
  "recently I've been trying to improve my fashion . . . ",
  "but I think it's so expensive      "
]
let trashText = false
let trashmsg = [
  "AHHHHHHH ! ! !",
  "i forgot to take out my trash . . .      "
]
let bslipperText = false
let bslippermsg = [
  "of course I wear slippers . . .       "
]
let aslippersText = false
let aslippersmsg = [
  "ah . . . those are my outside shoes       "
]
let soccerText = false
let soccermsg = [
  "ah . . . I guess I used to play when I left the house more        "
]
let bagText = false
let bagmsg = [
  "that's my bag",
  ". . . it fits all my stuff, so I like it       "
]
let flopText = false
let flopmsg = [
  "those are the shoes for the backyard       "
]
let windowText = false
let windowmsg = [
  "sometimes before bed I like to look out the window       "
]
let lampText = false
let lampmsg = [
  "I can't fall asleep if all the lights are on        "
]

// let thingX = [drawerX, outsideX, lightX, livingRoomX, clockX, musicX, tableX, posterX, lowerX, higherX, cdsX, pictureX, wardrobeX, garbageX, bslippersX, aslippersX, bagX, flopX, windowX, lampX]
// let thingY = [drawerY, outsideY, lightY, livingRoomY, clockY, musicY, tableY, postery, lowerY, higherY, cdsY, pictureY, wardrobeY, garbageY, bslippersY, aslippersY, bagY, flopY, windowY, lampY]
// let thingW = [dw, ow, lw, rw, cw, mw, tw, pw, lbw, hbw, cdw, gpw, ww, garbw, bsw, asw, bw, fw, bww, blw]
// let thingH = [dh, oh, lh, rh, ch, mh, th, ph, lbh, hbh, cdh, gph, wh, garbh, bsh, ash, bh, fh, bwh, blh]
// let thingText = [drawerText, outsideText, lightText, livingRoomText, clockText, ampText, tableText, posterText, lbooksText, hbooksText, cdsText, groupText, wardrobeText, trashText, bslipperText, aslippersText, bagText, flopText, windowText, lampText]
// let thingsArray = [];
// let thingindex = 0

// let face = [];
// let mood = []
// let frame1 = []
// let frame2 = []

// let nameisEntered = false

// drawers


 
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
  bedroomlight = loadImage("assets/bedroomlight.jpg")
  livingroom = loadImage("assets/living room.jpg")
}

function setup() {
  // rectMode(CENTER)
  let canvas = createCanvas(windowWidth, 1000);
  canvas.parent("p5-canvas-container");
  box = new Textbox(width/2, height/2+width*0.195)
  // for(let i = 4; i<4; i++){
  //   FormDataEvent.push(new Face(width/2, height/2, i))
  // }

  }

  // }
  // console.log(mood, frame1, frame2)
  // face = new Face(width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, frame1[i], frame2[i])

  
function draw() {
    background(0)

  // background(220);
  console.log(face)
  noStroke()
  
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
  let rx = width*0.98
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

  //girl come back to
  // ellipse
  let gx = width/2 + width*0.02
  let gy = height/2
  let gw = width*0.25
  let gh = width*0.3
  let girlX = mouseX - gx
  let girlY = mouseY - gy
  let girlhr = gw/2
  let girlvr = gh/2
  // new speech stuff UISRHSIUFSUIFBHDIUBF 

  // guitarandamp
  let mx = width*0.42
  let my = height/2+width*0.17
  let mw = width*0.13
  let mh = width*0.055
  let musicX = dist(mouseX, 0, mx, 0)
  let musicY = dist(mouseY, 0, my, 0)

// table and chairs
  let tx = width*0.72
  let ty = height/2+width*0.175
  let tw = width*0.27
  let th = width*0.08
  let tableX = dist(mouseX, 0, tx, 0)
  let tableY = dist(mouseY, 0, ty, 0)

  // globe/earth????(circle) come back
  let ex =width*0.8
  let ey = height/2+width*0.075
  let er = width*0.05
  let earthX = mouseX - ex
  let earthY = mouseY - ey
  let earthr = er/2

  // guitar poster
  let px = width*0.87
  let py = height/2-width*0.025
  let pw = width*0.04
  let ph = width*0.05
  let posterX = dist(mouseX, 0, px, 0)
  let postery = dist(mouseY, 0, py, 0)

  // lower books
  let lbx = width*0.88
  let lby = height/2+width*0.02
  let lbw = width*0.07
  let lbh = width*0.03
  let lowerX = dist(mouseX, 0, lbx, 0)
  let lowerY = dist(mouseY, 0, lby, 0)

  // higher books
  let hbx = width*0.805
  let hby = height/2-width*0.0155
  let hbw = width*0.08
  let hbh = width*0.025
  let higherX = dist(mouseX, 0, hbx, 0)
  let higherY = dist(mouseY, 0, hby, 0)

  // cds
  let cdx = width*0.88
  let cdy = height/2+width*0.084
  let cdw = width*0.07
  let cdh = width*0.03
  let cdsX = dist(mouseX, 0, cdx, 0)
  let cdsY = dist(mouseY, 0, cdy, 0)

  // group picture
  let gpx = width*0.813
  let gpy = height/2+width*0.015
  let gpw = width*0.05
  let gph = width*0.03
  let pictureX = dist(mouseX, 0, gpx, 0)
  let pictureY = dist(mouseY, 0, gpy, 0)

  // dresser wardrobe
  let wx = width*0.705
  let wy = height/2+width*0.1
  let ww = width*0.12
  let wh = width*0.06
  let wardrobeX = dist(mouseX, 0, wx, 0)
  let wardrobeY = dist(mouseY, 0, wy, 0)

  // trash
  let garbx = width*0.9
  let garby = height/2+width*0.14
  let garbw = width*0.045
  let garbh = width*0.06
  let garbageX = dist(mouseX, 0, gx, 0)
  let garbageY = dist(mouseY, 0, gy, 0)

  // bottom right slippers
  let bsx = width*0.91
  let bsy = height/2+width*0.252
  let bsw = width*0.06
  let bsh = width*0.03
  let bslippersX = dist(mouseX, 0, bsx, 0)
  let bslippersY = dist(mouseY, 0, bsy, 0)

  // above slippers
  let asx = width*0.915
  let asy = height/2+width*0.225
  let asw = width*0.05
  let ash = width*0.02
  let aslippersX = dist(mouseX, 0, asx, 0)
  let aslippersY = dist(mouseY, 0, asy, 0)

  // bag 
  let bx = width*0.915
  let by = height/2+width*0.193
  let bw = width*0.045
  let bh = width*0.043
  let bagX = dist(mouseX, 0, bx, 0)
  let bagY = dist(mouseY, 0, by, 0)

  // soccer ball
  let sx = width*0.1
  let sy = height/2+width*0.245
  let sr = width*0.055
  let soccerX = mouseX - sx
  let soccerY = mouseY - sy
  let soccerR = sr/2

  // flipflop
  let fx = width*0.165
  let fy = height/2+width*0.258
  let fw = width*0.065
  let fh = width*0.03
  let flopX = dist(mouseX, 0, fx, 0)
  let flopY = dist(mouseY, 0, fy, 0)

  // bed window
  let bwx = width*0.34
  let bwy = height/2+width*0.035
  let bww = width*0.05
  let bwh = width*0.1
  let windowX = dist(mouseX, 0, bwx, 0)
  let windowY = dist(mouseY, 0, bwy, 0)

  // bed lamp
  let blx = width*0.38
  let bly = height/2+width*0.075
  let blw = width*0.025
  let blh = width*0.04
  let lampX = dist(mouseX, 0, blx, 0)
  let lampY = dist(mouseY, 0, bly, 0)

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
        // if (thingX[thingindex] <= thingW[thingindex] / 2 && thingY[thingindex] <= thingH[thingindex] / 2) {
        //   thingsArray.push(thingX[thingindex]); 
        //   thingsArray.push(thingY[thingindex]); 
        //   thingsArray.push(thingW[thingindex]); 
        //   thingsArray.push(thingH[thingindex]); 
        //   thingsArray.push(thingText[thingindex]); 
        //   currentMessage = 0;
        //   lastTyped = millis();
        // }

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
          ampText = false
          tableText = 
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
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
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
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
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
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
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
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
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(musicX <= mw/2 && musicY <= mh/2){
          ampText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(tableX <= tw/2 && tableY <= th/2){
          tableText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        // 
        if(posterX <= pw/2 && postery <= ph/2){
          posterText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(lowerX <= lbw/2 && lowerY <= lbh/2){
          lbooksText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          posterText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(higherX <= hbw/2 && higherY <= hbh/2){
          hbooksText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(cdsX <= cdw/2 && cdsY <= cdh/2){
          cdsText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(pictureX <= gpw/2 && pictureY <= gph/2){
          groupText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(wardrobeX <= ww/2 && wardrobeY <= wh/2){
          wardrobeText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(garbageX <= garbw/2 && garbageY <= garbh/2){
          trashText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(bslippersX <= bsw/2 && bslippersY <= bsh/2){
          bslipperText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(aslippersX <= asw/2 && aslippersY <= ash/2){
          aslippersText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          bagText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(bagX <= bw/2 && bagY <= bh/2){
          bagText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          flopText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(flopX <= fw/2 && flopY <= fh/2){
          flopText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          windowText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(windowX <= bww/2 && windowY <= bwh/2){
          windowText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          lampText = false
          globeText = false
          soccerText = false
        }
        if(lampX <= blw/2 && lampY <= blh/2){
          lampText = true
          currentMessage = 0;
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          girlText = false
          drawerText = false
          livingRoomText = false
          clockText = false
          ampText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
          globeText = false
          soccerText = false
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
          ampText = false
          globeText = false
          soccerText = false
          tableText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
        }
        if(soccerX*soccerX+soccerY*soccerY<=soccerR*soccerR){
          soccerText = true
          currentMessage = 0
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          clockText = false
          drawerText = false
          livingRoomText = false
          ampText = false
          tableText = false
          girlText = false
          globeText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
        }
        if(earthX*earthX+earthY*earthY <= earthr*earthr){
          globeText = true
          currentMessage = 0
          index = 0
          lastTyped = millis()
          outsideText = false
          lightText = false
          clockText = false
          drawerText = false
          livingRoomText = false
          ampText = false
          tableText = false
          girlText = false
          posterText = false
          lbooksText = false
          hbooksText = false
          cdsText = false
          groupText = false
          wardrobeText = false
          trashText = false
          bslipperText = false
          aslippersText = false
          bagText = false
          flopText = false
          windowText = false
        }
      }
    // }
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
          // bedroomStageIntro = false
          // livingroomStage = true
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
    if(ampText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(ampmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < ampmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === ampmsg[currentMessage].length && currentMessage < ampmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === ampmsg.length - 1 && index === ampmsg[currentMessage].length){
          ampText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(tableText){
        // nuetralmood = false
        // lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(tablemsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < tablemsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === tablemsg[currentMessage].length && currentMessage < tablemsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === tablemsg.length - 1 && index === tablemsg[currentMessage].length){
          tableText = false
          // lookawaymood = false
          // nuetralmood = true
          }
    }
    if(globeText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(globemsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < globemsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === globemsg[currentMessage].length && currentMessage < globemsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === globemsg.length - 1 && index === globemsg[currentMessage].length){
          globeText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(posterText){
        // nuetralmood = false
        // lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(postermsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < postermsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === postermsg[currentMessage].length && currentMessage < postermsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === postermsg.length - 1 && index === postermsg[currentMessage].length){
          posterText = false
          // lookawaymood = false
          // nuetralmood = true
          }
    }
    if(lbooksText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(lbooksmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < lbooksmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === lbooksmsg[currentMessage].length && currentMessage < lbooksmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === lbooksmsg.length - 1 && index === lbooksmsg[currentMessage].length){
          lbooksText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(hbooksText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(hbooksmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < hbooksmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === hbooksmsg[currentMessage].length && currentMessage < hbooksmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === hbooksmsg.length - 1 && index === hbooksmsg[currentMessage].length){
          hbooksText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(cdsText){
        // nuetralmood = false
        // lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(cdsmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < cdsmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === cdsmsg[currentMessage].length && currentMessage < cdsmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === cdsmsg.length - 1 && index === cdsmsg[currentMessage].length){
          cdsText = false
          // lookawaymood = false
          // nuetralmood = true
          }
    }
    if(groupText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(groupmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < groupmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === groupmsg[currentMessage].length && currentMessage < groupmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === groupmsg.length - 1 && index === groupmsg[currentMessage].length){
          groupText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(wardrobeText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(wardrobemsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < wardrobemsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === wardrobemsg[currentMessage].length && currentMessage < wardrobemsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === wardrobemsg.length - 1 && index === wardrobemsg[currentMessage].length){
          wardrobeText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(trashText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(trashmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < trashmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === trashmsg[currentMessage].length && currentMessage < trashmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === trashmsg.length - 1 && index === trashmsg[currentMessage].length){
          trashText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(bslipperText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(bslippermsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < bslippermsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === bslippermsg[currentMessage].length && currentMessage < bslippermsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === bslippermsg.length - 1 && index === bslippermsg[currentMessage].length){
          bslipperText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(aslippersText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(aslippersmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < aslippersmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === aslippersmsg[currentMessage].length && currentMessage < aslippersmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === aslippersmsg.length - 1 && index === aslippersmsg[currentMessage].length){
          aslippersText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(soccerText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(soccermsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < soccermsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === soccermsg[currentMessage].length && currentMessage < soccermsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === soccermsg.length - 1 && index === soccermsg[currentMessage].length){
          soccerText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(bagText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(bagmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < bagmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === bagmsg[currentMessage].length && currentMessage < bagmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === bagmsg.length - 1 && index === bagmsg[currentMessage].length){
          bagText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(flopText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(flopmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < flopmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === flopmsg[currentMessage].length && currentMessage < flopmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === flopmsg.length - 1 && index === flopmsg[currentMessage].length){
          flopText = false
          lookawaymood = false
          nuetralmood = true
          }
    }
    if(windowText){
        // nuetralmood = false
        // lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(windowmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < windowmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === windowmsg[currentMessage].length && currentMessage < windowmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === windowmsg.length - 1 && index === windowmsg[currentMessage].length){
          windowText = false
          // lookawaymood = false
          // nuetralmood = true
          }
    }
    if(lampText){
        nuetralmood = false
        lookawaymood = true
        box.display()

        stroke(255)
        // strokeWeight(10)
        textSize(width*0.03)
        textFont("Annie Use Your Telescope")
        fill(255)
        
        text(lampmsg[currentMessage].substring(0, index), width*0.2, height/2+width*0.2)
        if(millis() - lastTyped > typingSpeed && index < lampmsg[currentMessage].length) {
        index++;
        lastTyped = millis()
        }
        if(index === lampmsg[currentMessage].length && currentMessage < lampmsg.length - 1){
          if(millis()-lastTyped > 800){
            currentMessage++
            index = 0
            lastTyped = millis()
        }
      }
      if(currentMessage === lampmsg.length - 1 && index === lampmsg[currentMessage].length){
          lampText = false
          lookawaymood = false
          nuetralmood = true
          }
        }
        
      
    
    

    // // top drawers
    // push()
    //   rectMode(CENTER)
    //   stroke(255)
    //   strokeWeight(2)
    //   noFill()
    //   rect(width*0.845, height/2-width*0.09, width*0.15, width*0.07)
    //   pop()
    // // // outside left
    //   push()
    //   rectMode(CENTER)
    //   stroke(255)
    //   strokeWeight(2)
    //   noFill()
    //   rect(width*0.16, height/2+width*0.05, width*0.24, width*0.3)
    //   pop()
      
    // //   // girl
    //   push()
    //   noFill() 
    //   strokeWeight(2)
    //   stroke(255)
    //   ellipse(width/2 + width*0.02, height/2, width*0.25, width*0.3)
    //   pop()

    // //   // lights
    //   push()
    //   rectMode(CENTER)
    //   stroke(255)
    //   strokeWeight(2)
    //   noFill()
    //   rect(width*0.6, height/2-width*0.16, width*0.13, width*0.05)
    //   pop()

    // //   // door to living room
    //   push()
    //   rectMode(CENTER)
    //   stroke(255)
    //   strokeWeight(2)
    //   noFill()
    //   rect(width*0.98, height/2, width*0.08, width*0.6)
    //   pop()

    // //   // clock
    //   push()
    //   rectMode(CENTER)
    //   stroke(255)
    //   strokeWeight(2)
    //   noFill()
    //   rect(width*0.72, height/2-width*0.04, width*0.055, width*0.05)
    //   pop()

    // havent done yet
//       // // guitar and amp
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.42, height/2+width*0.17, width*0.13, width*0.055)
//       pop()

//       // // table and chairs      
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.72, height/2+width*0.175, width*0.27, width*0.08)
//       pop()
//       // I REALIZED THAT THE FRICKING TEXTBOX COVERS THESE LOL OOPS

//       // globe
//     push()
//     stroke(255)
//     strokeWeight(2)
//     noFill()
//     circle(width*0.8, height/2+width*0.075, width*0.05)
//     pop()

//     // guitar poster
//     push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.87, height/2-width*0.025, width*0.04, width*0.05)
//       pop()

//       // books
//     push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.88, height/2+width*0.02, width*0.07, width*0.03)
//       pop()
// // also books
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.805, height/2-width*0.0155, width*0.08, width*0.025)
//       pop()


//       // cds
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.88, height/2+width*0.084, width*0.07, width*0.03)
//       pop()
// // group picture
// push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.813, height/2+width*0.015, width*0.05, width*0.03)
//       pop()
      
//       // dresser
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.705, height/2+width*0.1, width*0.12, width*0.06)
//       pop()

//       // trash
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.9, height/2+width*0.14, width*0.045, width*0.06)
//       pop()

//       // slippers bottom right
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.91, height/2+width*0.252, width*0.06, width*0.03)
//       pop()

//       // slippers right above
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.915, height/2+width*0.225, width*0.05, width*0.02)
//       pop()

//       // bag right
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.915, height/2+width*0.193, width*0.045, width*0.043)
//       pop()

//       // soccer ball
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       circle(width*0.1, height/2+width*0.245, width*0.055)
//       pop()

//       // flip flops
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.165, height/2+width*0.258, width*0.065, width*0.03)
//       pop()

//       // bed window
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.34, height/2+width*0.035, width*0.05, width*0.1)
//       pop()

//       // bed lamp
//       push()
//       rectMode(CENTER)
//       stroke(255)
//       strokeWeight(2)
//       noFill()
//       rect(width*0.38, height/2+width*0.075, width*0.025, width*0.04)
//       pop()
      
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
        // face[0].animate()
        image(eyes1, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
       }
       if (angrymood){
        // face[1].animate()
        image(angry1, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
       }
       if (lookawaymood){
        // face[2].animate()
        image(lookaway1, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
       }

    } 
    if(animate == false) {
      image(img2, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
      if (nuetralmood){
        // face[0].animate()
        image(eyes2, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
       }
       if (angrymood){
        // face[1].animate()
        image(angry2, width/2-windowWidth * 0.315/2, height/2-windowWidth*0.55 * 0.8/2, windowWidth * 0.315, windowWidth*0.55 * 0.8)
       }
       if (lookawaymood){
        // face[2].animate()
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

// class Face {
//   constructor(startX, startY, mood) {
//     this.x = startX;
//     this.y = startY;
//     this.mood = mood
//     this.currentFrame = frame1[mood]
//     this.frame1 = frame1[mood]
//     this.frame2 = frame2[mood]
//   }
//   animate(){
//     if (frameCount % 40 == 0) {
//       this.currentFrame = this.frame1
//     }
//     if (frameCount % 40 == 20) {
//      this.currentFrame = this.frame2
//     }
//    textALIGN(CENTER)
//    textSize(50)
//    text(this.currentFrame, width/2, height/2)
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
