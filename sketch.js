var guerra,homemdeferro;
var guerraImg,homemdeferroImg;

function preload(){
  guerraImg = loadImage("guerra.jpg");
  shipImg1 = loadImage("homem de ferro.jpeg");
}
function setup(){
  createCanvas(400,400);
  background("red");

  guerra=createSprite(100,100);
  guerra.addImage(guerraImg);
  guerra.velocityX = -5;
  

  
  homemdeferro = createSprite(150,150,10,10);
  homemdeferro.addImage (shipImg1);
  homemdeferro.scale =0.3;
  
}
function draw() {
  guerra.velocityX = -3;

  if(guerra.x < 0){
    guerra.x = guerra.width/8;
  }
    
  drawSprites();
}