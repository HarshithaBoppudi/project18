var bananaImage,obstacleImage,obstaclegroup,monkey_running;
var backGround,score,monkey,Ground, Ground_running,bananaGroup,backGround_image;
var score=0;


function preload(){
  backGround_image=loadImage("jungle.jpg");
  monkey_running=loadAnimation("Monkey_03.png","Monkey_02.png",
 "Monkey_01.png","Monkey_10.png","Monkey_08.png","Monkey_09.png","Monkey_07.png",
 "Monkey_05.png","Monkey_06.png","Monkey_04.png" );
   bananaImage=loadImage("Banana.png");
  obstacleImage=loadImage("stone.png");
  Ground_running=loadImage("ground.png")
 
}


function setup() {
  createCanvas(800,500);
  
   monkey = createSprite(50,250,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
   backGround=createSprite(300,150,300,200);
   backGround.addImage("image",backGround_image);
  // backGround.scale=1.3
  Ground = createSprite(500,400,1700,20);
 // Ground.scale=0.5;
 // Ground.addImage("ground",Ground_running); 
  Ground.velocityX=-3;
  Ground.x = Ground.width /2;
  Ground.visible=false
 bananaGroup=new Group();
    
  
}


function draw(){
  background(0);
   background.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
   if(keyDown("space")) {
    monkey.velocityY = -10;
    
   }
  monkey.velocityY = monkey.velocityY + 0.8
  if(Ground.x<0){
    Ground.x=200
  }
  if(bananaGroup.isTouching(monkey)){
    banana.destroy()
    score=score+1;
    console.log(score)
  }
  
   monkey.collide(Ground);
   spawnbanana(); 
  drawSprites();
  stroke("white")
  textSize(20)
  fill("white")
  text("score: "+score,500,50)
  //switch(score){
    //case
  //}
}
function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    banana=createSprite(1000,140,10,10)
  banana.addImage("food", bananaImage)
  banana.scale=0.050;
    
    banana.y = Math.round(random(280,320));
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 400;
    
    //adjust the depth
   
    
    //add each cloud to the group
    bananaGroup.add(banana);

  }
  
}