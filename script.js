var playerLv1 , playerLv1_Img_Idle , playerLv1_Img_Run , playerLv1_Img_attack;
var Bg_image , Bg , tileLv1_img , tile ;
var tile2,tile3,tile4,til5,tile6,tile7,tile8,tile9,tile10,tile11,tile12,tile13,tile14,tile15;
var enemy_1 , enemy_1_image_idle , enemy_1_image_run ; 
var enemy_health = 50;

 

function preload(){
    playerLv1_Img_Idle = loadAnimation("PP1/_Mode-Sword/01-Idle/0.png","PP1/_Mode-Sword/01-Idle/1.png","PP1/_Mode-Sword/01-Idle/2.png","PP1/_Mode-Sword/01-Idle/3.png","PP1/_Mode-Sword/01-Idle/4.png","PP1/_Mode-Sword/01-Idle/5.png","PP1/_Mode-Sword/01-Idle/6.png","PP1/_Mode-Sword/01-Idle/7.png","PP1/_Mode-Sword/01-Idle/8.png")

    playerLv1_Img_Run = loadAnimation('PP1/_Mode-Sword/02-Run/1.png','PP1/_Mode-Sword/02-Run/2.png','PP1/_Mode-Sword/02-Run/3.png','PP1/_Mode-Sword/02-Run/4.png','PP1/_Mode-Sword/02-Run/5.png','PP1/_Mode-Sword/02-Run/6.png','PP1/_Mode-Sword/02-Run/7.png','PP1/_Mode-Sword/02-Run/8.png','PP1/_Mode-Sword/02-Run/9.png','PP1/_Mode-Sword/02-Run/10.png')

    Bg_image  = loadImage("BackGround.jpg")
    tileLv1_img = loadImage("TilesLv1.png")

    enemy_1_image_idle = loadAnimation("IDLE_RED_ENEMY/image_prev_ui.png","IDLE_RED_ENEMY/image (1)_prev_ui.png","IDLE_RED_ENEMY/image (2).png","IDLE_RED_ENEMY/image (3).png","IDLE_RED_ENEMY/image (4).png","IDLE_RED_ENEMY/image (5).png","IDLE_RED_ENEMY/image (6).png","IDLE_RED_ENEMY/image (7).png","IDLE_RED_ENEMY/image (8).png","IDLE_RED_ENEMY/image (9).png","IDLE_RED_ENEMY/image (10).png","IDLE_RED_ENEMY/image (11).png");

    enemy_1_image_run = loadAnimation("RUN_RED_ENEMY/image_prev_ui.png","RUN_RED_ENEMY/image (1)_prev_ui.png","RUN_RED_ENEMY/image (2)_prev_ui.png","RUN_RED_ENEMY/image (3)_prev_ui.png","RUN_RED_ENEMY/image (4)_prev_ui.png","RUN_RED_ENEMY/image (5)_prev_ui.png","RUN_RED_ENEMY/image (6)_prev_ui.png","RUN_RED_ENEMY/image (7)_prev_ui.png");

    playerLv1_Img_attack = loadAnimation("PP1/_Mode-Sword/03-Slash/JK_P_Sword__Attack_000.png","PP1/_Mode-Sword/03-Slash/JK_P_Sword__Attack_001.png","PP1/_Mode-Sword/03-Slash/JK_P_Sword__Attack_002.png","PP1/_Mode-Sword/03-Slash/JK_P_Sword__Attack_003.png","PP1/_Mode-Sword/03-Slash/JK_P_Sword__Attack_004.png","PP1/_Mode-Sword/03-Slash/JK_P_Sword__Attack_005.png","PP1/_Mode-Sword/03-Slash/JK_P_Sword__Attack_006.png","PP1/_Mode-Sword/03-Slash/JK_P_Sword__Attack_007.png","PP1/_Mode-Sword/03-Slash/JK_P_Sword__Attack_008.png","PP1/_Mode-Sword/03-Slash/JK_P_Sword__Attack_009.png")



}
function setup(){
    createCanvas(windowWidth,windowHeight);

    Bg = createSprite(windowWidth/2,windowHeight/2,30,30)
    Bg.addImage(Bg_image);

     playerLv1 = createSprite(200,600,30,30);
     playerLv1.scale = 0.5
     playerLv1.addAnimation("idle",playerLv1_Img_Idle);
     playerLv1.addAnimation("run",playerLv1_Img_Run)
     playerLv1.addAnimation("attack",playerLv1_Img_attack);
    
    enemy_1 = createSprite(1600,600,30,30);
    enemy_1.addAnimation("stand",enemy_1_image_idle);
    enemy_1.addAnimation("runner",enemy_1_image_run);
    enemy_1.scale =0.7;
    enemy_1.debug = true;

    enemy_1.setCollider("rectangle",0,0,200,260)

    tile = createSprite(playerLv1.x,playerLv1.y+100,400,40)
    tile.addImage(tileLv1_img);

    tile2 = createSprite(700,500,40,40)
    tile2.addImage(tileLv1_img);

    tile3 = createSprite(1300,700,40,40)
    tile3.addImage(tileLv1_img);

    tile4 = createSprite(1500,700,40,40)
    tile4.addImage(tileLv1_img);

    tile5 = createSprite(1700,700,40,40)
    tile5.addImage(tileLv1_img);

   


}
function draw(){
    background("white")
    camera.position.x = playerLv1.x+650;
    if (keyDown("RIGHT_ARROW")) {
        playerLv1.x += 10;
        playerLv1.changeAnimation("run",playerLv1_Img_Run)
        playerLv1.scale = 0.5
        
    }
    if (keyWentUp("RIGHT_ARROW")) {
        playerLv1.changeAnimation("idle",playerLv1_Img_Idle)
        playerLv1.scale = 0.5
        
    }
    if(keyWentDown("Space")){
         playerLv1.velocityY = -12
    }
    if (playerLv1.y<400) {
        playerLv1.velocityY += 0.8
        
    }

    if(enemy_1.x - playerLv1.x <=300&&enemy_1.x - playerLv1.x>200){
        enemy_1.changeAnimation("runner",enemy_1_image_run);
        enemy_1.x -=5;
        
    }
    if(playerLv1.isTouching(enemy_1)){
        if (keyDown("k")) {
            playerLv1.changeAnimation("attack",playerLv1_Img_attack)
            enemy_health -=10;

            
        }
        if(enemy_health!=0){
          playerLv1.x  
        }

    }
   
    
 
    playerLv1.collide(tile)
    playerLv1.collide(tile2)
    playerLv1.collide(tile3)
     playerLv1.collide(tile3)
     playerLv1.collide(tile4)
    playerLv1.collide(tile5)
    enemy_1.collide(tile5)
    // playerLv1.collide(tile6)
    // playerLv1.collide(tile7)
    // playerLv1.collide(tile8)
    // playerLv1.collide(tile9)

    // playerLv1.collide(tile10)
    // playerLv1.collide(tile11)
    // playerLv1.collide(tile12)
    // playerLv1.collide(tile13)

    // playerLv1.collide(tile14)
    // playerLv1.collide(tile15)

   


    //console.log(playerLv1.x);

    drawSprites();





}