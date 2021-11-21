var michael,michael_img;
var bordas;
var chao,chaoimg;
var chaorobado;
var obs,obstacle1_img;
var nuvem;
var cloud;
var cacto;
var pontuacao = 0;
function preload(){
  //pre carrega as imagens do jogo
  
  michael_img = loadAnimation("trex1.png","trex3.png","trex4.png");
  chaoimg = loadImage("ground2.png");
  obstacle1_img = loadImage("obstacle1.png"); 
  cloud = loadImage("cloud.png");

  cacto1 = loadImage("obstacle1.png");
  cacto2 = loadImage("obstacle2.png");
  cacto3 = loadImage("obstacle3.png");
  cacto4 = loadImage("obstacle4.png");
  cacto5 = loadImage("obstacle5.png");
  cacto6 = loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200);
  //var num = Math.round(random(1,10))
  //console.log(num)
  chao = createSprite(300,190,600,20);
  chao.addImage(chaoimg);
  chaorobado = createSprite(300,195,600,10);
  chaorobado.visible = false;
  
  
  //configurações do dinossauro michael
  michael = createSprite(50,100,20,20);
  michael.addAnimation("running",michael_img);
  michael.scale = 0.5;
  
  bordas = createEdgeSprites();

}

function draw(){
  background('white');

  cloudgenerator();

  cactogenerator();

 text("points: "+pontuacao,500,10)
 pontuacao = pontuacao + Math.round(frameCount/60)
  chao.velocityX = -5;

  if (chao.x<0){
   chao.x = chao.width/2;
  }

 console.log(frameCount);
 
  if(keyDown("w")&&michael.isTouching(chao)){
    michael.velocityY = -17;
  }

  //gravidade
  michael.velocityY = michael.velocityY + 1;

  michael.collide(chaorobado);

  drawSprites();
}

function cloudgenerator(){
  if (frameCount%60===0){
    nuvem = createSprite(625,100,20,20);
    nuvem.velocityX = -3;
    nuvem.addImage(cloud);
    nuvem.scale = 0.7;
    nuvem.y = Math.round(random(50,100));
    nuvem.depth = michael.depth;
    michael.depth = michael.depth + 1;
    nuvem.lifetime = 220;



  }

  

}

function cactogenerator(){
if (frameCount%80===0){
cacto = createSprite(615,180,20,20);
cacto.velocityX = -5;
var cactoaleatorio = Math.round(random(1,6));
switch(cactoaleatorio){
  case 1: cacto.addImage(cacto1);
  break ;

  case 2: cacto.addImage(cacto2);
  break ;

  case 3: cacto.addImage(cacto3);
  break ;

  case 4: cacto.addImage(cacto4);
  break ;

  case 5: cacto.addImage(cacto5);
  break ;

  case 6: cacto.addImage(cacto6);
  break ;

default: break;

  
}
cacto.scale = 0.6;
cacto.lifetime = 220;
}



}



