
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImg=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
   trex=createSprite(50,160,30,20)

   trex.addAnimation("running",trex_running);

   trex.scale=0.5
   
   ground=createSprite(200,180,1200,20)
   ground.addImage(groundImg)
   invisibleGround=createSprite(300,190,1200,20);
   invisibleGround.visible=false;
}

function draw(){
  background(250)

  if(keyDown("space") && trex.y >=150){
    trex.velocityY=-12;
    }
    trex.velocityY=trex.velocityY+0.8;

    trex.collide(invisibleGround);
     
    ground.velocityX=-2;

    if(ground.x < 0){
      ground.x=300
     }
     console.log(trex.y)
   drawSprites();
}
