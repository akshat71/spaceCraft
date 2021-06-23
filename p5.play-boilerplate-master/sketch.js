var hasDocked=false;



function preload(){
bg=loadImage("Docking-undocking/spacebg.jpg")
spaceCraft1IMG=loadImage("Docking-undocking/spacecraft1.png")
spaceCraft2IMG=loadImage("Docking-undocking/spacecraft2.png")
spaceCraft3IMG=loadImage("Docking-undocking/spacecraft3.png")
spaceCraft4IMG=loadImage("Docking-undocking/spacecraft4.png")
issIMG=loadImage("Docking-undocking/iss.png")

}
function setup() {
  createCanvas(800,400);
  spaceCraft=createSprite(285,240);
  spaceCraft.addImage(spaceCraft1IMG)
  spaceCraft.scale=0.15

  iss=createSprite(330,130)
  iss.addImage(issIMG)
  iss.scale=0.25
}

function draw() {

  background(bg);  
spaceCraft.addImage(spaceCraft1IMG)
if(!hasDocked){
  spaceCraft.x=spaceCraft.x+random(-1,1)

}
if(keyDown("UP_ARROW")){
spaceCraft.y=spaceCraft.y-2
}
if(keyDown("DOWN_ARROW")){
  spaceCraft.addImage(spaceCraft2IMG)
  spaceCraft.y=spaceCraft.y+2
  }
  if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(spaceCraft3IMG)
    spaceCraft.x=spaceCraft.x-2
    }
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(spaceCraft4IMG)
      spaceCraft.x=spaceCraft.x+2
      }
if(spaceCraft.y<=(iss.y+41)&&spaceCraft.x<=(iss.x-10)){
hasDocked=true;
textSize(25)
fill("white")
text("Docking Successful",200,300)
}


  drawSprites();

}