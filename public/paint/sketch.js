// var ball = {
// 	x: 40,
// 	y: 60
// };


function setup() {
	createCanvas(600, 600);
	background(250, 250, 100);
}

function draw() {
	noStroke();
	fill(200, 100, 100, 100);
	ellipse(mouseX, mouseY, 20, 20);

}

function mousePressed(){
	background(250, 250, 100);	
}