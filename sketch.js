var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

var fairy,fairyImg;
var music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starryNight.jpg");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	//load sound
	music=loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	music.play();

	//create fairy sprite and add animation for fairy
	fairy= createSprite(200,550,10,10);
	fairy.addAnimation("fairy",fairyImg);
	fairy.scale=0.3;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y>200 && starBody.position.y>200){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	//writw code to move fairy left and right
	if(keyCode=== RIGHT_ARROW){
		fairy.x=fairy.x+30;
	}

	if(keyCode=== LEFT_ARROW){
		fairy.x=fairy.x-30;
	}


	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if(keyCode=== UP_ARROW){
		fairy.y=fairy.y-30;
	}

	
}
