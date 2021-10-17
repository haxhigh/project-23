
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ball;
var bottom;
var wall1;
var wall2;
function preload() {

}

function setup() {
	createCanvas(600, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	var ballOptions = {
		restitution: 0.3
	}

	var wallsOption = {
		isStatic: true
	}

	bottom = Bodies.rectangle(300, 780, width, 10, wallsOption);
	World.add(world, bottom);

	wall1 = Bodies.rectangle(400, 755, 10, 40, wallsOption);
	World.add(world, wall1);

	wall2 = Bodies.rectangle(470, 755, 10, 40, wallsOption);
	World.add(world, wall2);

	ball = Bodies.circle(50, 740, 15, ballOptions);
	World.add(world, ball);
}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);

	background("black");

	rect(bottom.position.x, bottom.position.y, width, 10);
	rect(wall1.position.x, wall1.position.y, 10, 40);
	rect(wall2.position.x, wall2.position.y, 10, 40);

	ellipse(ball.position.x, ball.position.y, 15, 15);

	console.log(ball.position.y);
	//console.log(keyCode);
	if (keyIsDown(UP_ARROW) && ball.position.y >= 760) {
		jump();

	}

	if (keyIsDown(RIGHT_ARROW)) {
		right();
	}

	if (keyIsDown(LEFT_ARROW)) {
		left();
	}
}

function jump() {
	console.log("a")
	Matter.Body.applyForce(ball, ball.position, { x: 0, y: -0.05 });
}

function right() {
	Matter.Body.applyForce(ball, ball.position, { x: 0.005, y: 0 });
}

function left() {
	Matter.Body.applyForce(ball, ball.position, { x: -0.005, y: 0 });
}