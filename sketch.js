var path, boy, cash, diamonds, jwellery, sword;
var pathImg, boyImg, cashImg, diamondsImg, jwelleryImg, swordImg;
var treasureCollection = 0;
var cashG, diamondsG, jwelleryG, swordGroup;
var play = 1;
var end = 0;
var gamestate = play;
var over_
var hurd_
var hurd1

function preload() {
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png", "runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg = loadImage("gameOver.png");
  hurd = loadImage("hurdle.png")
}

function setup() {

  createCanvas(600, 600);
  // Moving background
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;


  //creating boy running
  boy = createSprite(70, 600, 20, 20);
  boy.addAnimation("SahilRunning", boyImg);

  boy.scale = 0.08;

 //over = createSprite(300, 300, 10, 10)
 //over.addImage("gameover", endImg)

  cashG = new Group();
  diamondsG = new Group();
  jwelleryG = new Group();
  swordGroup = new Group();
  hurd1 = new Group();

}

function draw() {

  background(0);

  console.log("gamestate=" + gamestate)

  if (gamestate === play) {
    boy.x = World.mouseX;
    // over_.visible = false;


    edges = createEdgeSprites();
    boy.collide(edges);



    //code to reset the background
    if (path.y > 400) {
      path.y = height / 2;
    }

    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection + 50;
    } else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection + 100;

    } else if (jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection + 150;

    } else {

      if (swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        gamestate = end
   
      }

     hurd1.collide(boy)

      //boy.debug = true;
      boy.setCollider("circle", 0, 0, 100)
    }

  }

  if (gamestate === end) {

    cashG.velocityY = 0;
    diamondsG.velocityY = 0;
    jwelleryG.velocityY = 0;
    swordGroup.velocityY = 0;
    path.velocityY = 0;
    //over.visible = true;
    boy.addImage( endImg)
    gameover()
  }

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: " + treasureCollection, 150, 30);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
    var cash = createSprite(Math.round(random(50, 570), 40, 10, 10));
    cash.addImage(cashImg);
    cash.scale = 0.12;
    cash.velocityY = 3;
    cash.lifetime = 200;
    cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
    var diamonds = createSprite(Math.round(random(50, 570), 40, 10, 10));
    diamonds.addImage(diamondsImg);
    diamonds.scale = 0.03;
    diamonds.velocityY = 3;
    diamonds.lifetime = 200;
    diamondsG.add(diamonds);
  }
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
    var jwellery = createSprite(Math.round(random(50, 570), 40, 10, 10));
    jwellery.addImage(jwelleryImg);
    jwellery.scale = 0.13;
    jwellery.velocityY = 3;
    jwellery.lifetime = 200;
    jwelleryG.add(jwellery);
  }
}

function createSword() {
  if (World.frameCount % 150 == 0) {
    var sword = createSprite(Math.round(random(50, 570), 40, 10, 10));
    sword.addImage(swordImg);
    sword.scale = 0.1;
    sword.velocityY = 3;
    sword.lifetime = 200;
    swordGroup.add(sword);
  }
}

 function gameover (){
   over = createSprite(300, 300, 10, 10)
 over.addImage("gameover", endImg)
 }


 function   hurdle12() {
  if(getFrameRate()/60 === 0){
  hurdle_ = createSprite(600,Math.round(random(100,500)))
  hurdle.velocityX = 3;
  hurdle.lifetime = 10;
  hurdle.addImage(hurdle) 
  hurdle.add(hurd1)
  
  } 
 }