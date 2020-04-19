const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var earth,earth_animation;
var moon;
var db1,db2,db3,db4,db5;
function preload()
{
   bg=loadImage("universe.jpg");
   astImg=loadImage("inew.png");
  dbi1=loadImage("pics/db1.png")
  dbi2=loadImage("pics/db2.png")
  dbi3=loadImage("pics/db3.png")
  dbi4=loadImage("pics/db4.png")
  dbi5=loadImage("pics/db5.png")
   //created oone image
   gif_createImg = createImg("earth.gif");

}
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    gif_createImg.position(250, 50);
    ast=createSprite(800,50,25,25);
    ast.addImage("ass", astImg)
    ast.scale=0.2;
    ast.velocityX=-2;
 
    ast.velocityY=1;
   TEXT1= text("WE HAVE DEBRIS ALL AROUND OUR EARTH",200,800);
   TEXT2= text("ALL THESE ARE HAVING PRECIOUS MATERIALS",300,800);
   TEXT3= text("WE ARE GOING TO SEE THAT IN THIS GAME",400,800);
   


db1=createSprite(400,400);
   db1.addImage(dbi1);
db1.scale=0.1;
db2=createSprite(440,440);
db2.addImage(dbi2);
db2.scale=0.075;
db3=createSprite(360,360);
db3.addImage(dbi3);
db3.scale=0.1;
db4=createSprite(520,440);
db4.addImage(dbi4);
db4.scale=0.5;
db6=createSprite(600,400);
db6.addImage(dbi5);
db6.scale=0.1;
db7=createSprite(620,360);
   db7.addImage(dbi1);
db7.scale=0.1;
db8=createSprite(640,240);
db8.addImage(dbi2);
db8.scale=0.075;
db9=createSprite(640,320);
db9.addImage(dbi3);
db9.scale=0.1;
db10=createSprite(610,200);
db10.addImage(dbi4);
db10.scale=0.5;
db5=createSprite(560,160);
db5.addImage(dbi5);
db5.scale=0.1;
db11=createSprite(480,140);
db11.addImage(dbi2);
db11.scale=0.075;
db12=createSprite(410,170);
db12.addImage(dbi3);
db12.scale=0.1;
db13=createSprite(370,210);
db13.addImage(dbi4);
db13.scale=0.5;
db14=createSprite(350,280);
db14.addImage(dbi5);
db14.scale=0.1;
skip=createButton("next");
skip.position(800,800);
}

function draw(){
    background(bg);
    Engine.update(engine);
  //  rotateMoon(1);
    drawSprites();
    
}
