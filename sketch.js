var path,boy,burger,coin,choclate,dog;
var pathImg,boyImg,burgerImg,coinImg,choclateImg,dogImg;
var treasureCollection = 0;
var burgerG,coinG,choclateG,dogGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
burgerImg = loadImage("burger.png");
coinImg = loadImage("coin.png1.png");
choclateImg = loadImage("choclate.png");
dogImg = loadImage("dog.png");
endImg = loadAnimation(" gameOver.png");
}

function setup(){

    //create a canvas

    createCanvas(windowWidth,windowHeight);
    
    //Movingbackground

    path=createSprite(width/2,200);
    path.addImage(pathImg);
    path.velocityY = 4;

    //creating boy running
    boy = createSprite(width/2,height-20,20,20);
    boy.addAnimation("SahilRunning",boyImg);
    boy.scale=0.08;


    burgerG=new Group();
     coinG=new Group();
    choclateG=new Group();
    dogG=new Group();
 
}

function draw() {
 
    if(gameState===PLAY){
    background(0);
    boy.x = World.mouseX;

    edges= createEdgeSprites();
    boy.collide(edges);

    //code to reset the background

    if(path.y > height){
    path.y = height/2;   
    }

    createBurger();
    createCoin();
   createchoclate();
    createDog();

    if (burger.isTouching(boy)) {
    burgerG.destroyEach();
    treasureCollection=treasureCollection + 50;
    }
    else if (coinG.isTouching(boy)){
    coinG.destroyEach();
    treasureCollection=treasureCollection + 100;

    }else if(choclateG.isTouching(boy)) {
    choclateG.destroyEach();
    treasureCollection=treasureCollection + 150;


    }else{
        if(dogGroup.isTouching(boy)) {
            gameState=END;

            boy.addAnimation("SahilRunning",endImg);
            boy.x=width/2;
            boy.y=height/2
            boy.scale=0.6;

            burgerG.destroyEach();
            coinG.destroyEach();
            choclateG.destroyEach();
            dogG.destroyEach();

            burgerG.setVelocityYEach(0);
            coinG.setVelocityYEach(0);
            choclate.setVelocityYEach(0);
            dog.setVelocityYEach(0);


        }
    }
  
    drawSprites();
    textSize(20);
    Fill(255);
    text("Treasure: "+ treasureCollection,width-150,30);
    }

}


function createBurger() {
    if (world.frameCount % 200 == 0) {
    var burger = createSprite(Math.round(random(50,width-50),40, 10, 10));
    burger.addImage(burgerImg);
    burger.scale=0.12;
    burger.velocityY = 5;
    burger.lifetime = 200;
    burgerG.add(burger);
    }
    }

    
   
    function createCoin() {
        if (world.frameCount % 320 == 0) {
        var coin = createSprite(Math.round(random(50,width-50),40, 10, 10));
        coin.addImage(burgerImg);
        coin.scale=0.03;
        coin.velocityY = 5;
        coin.lifetime = 200;
        coinG.add(coin);
        }
        }


        
        function createChoclate() {
            if (world.frameCount % 410 == 0) {
            var choclate = createSprite(Math.round(random(50,width-50),40, 10, 10));
            choclate.addImage(burgerImg);
            choclate.scale=0.13;
            choclate.velocityY = 5;
            choclate.lifetime = 200;
            choclateG.add(choclate);
            }
        }

            function createDog() {
                if (world.frameCount % 530 == 0) {
                var dog = createSprite(Math.round(random(50,width-50),40, 10, 10));
                dog.addImage(burgerImg);
                dog.scale=0.1;
                dog.velocityY = 4;
                dog.lifetime = 200;
                dogG.add(dog);
        }
            }




























    
