
    // for naming sprites
    var garden , gardenimg;

    var mouse,  mouseimg1 ,mouseimg2 , mouseimg3;

    var tom,tomimg1,tomimg2,tomimg3;



    function preload() {
        //load the images here
    gardenimg = loadImage("images/garden.png");

    mouseimg1 = loadAnimation("images/mouse1.png");
    mouseimg2 = loadAnimation("images/mouse2.png" ,"images/mouse3.png");
    mouseimg3 = loadAnimation("images/mouse4.png");

    tomimg1 = loadAnimation("images/cat1.png");
    tomimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomimg3 = loadAnimation("images/cat4.png");

    }

    function setup(){
        createCanvas(1000,800);
        //for createSprite
   // garden= createSprite(1000,800);

    mouse =createSprite(220,700,10,10);

    tom= createSprite(820,700,10,10);

    // for adding image
   // garden.addImage("garden",gardenimg);
    tom.addAnimation("tom1",tomimg1);
    mouse.addAnimation("mouse1",mouseimg1);

    // for adding scale
    tom.scale = 0.1;
    mouse.scale = 0.1;

    }

    function draw() {

        background(gardenimg);
        //Write condition here to evalute if tom and jerry collide
       if(tom.x-mouse.x<(tom.width - mouse.width)/2){
           tom.velocityX = 0;
        tom.addAnimation("change",tomimg3);
        mouse.addAnimation("bekar",mouseimg3);
        tom.changeAnimation("change");
        mouse.changeAnimation("bekar");
        tom.x =300;
       }
        drawSprites();
    }


    function keyPressed(){

    //For moving and changing animation write code here
        if(keyCode===LEFT_ARROW){
            tom.velocityX = -4;
            mouse.addAnimation("mouse2",mouseimg2);
            tom.addAnimation("tom2",tomimg2);
            tom.changeAnimation("tom2");
        mouse.changeAnimation("mouse2");
            
            
        }

    }
