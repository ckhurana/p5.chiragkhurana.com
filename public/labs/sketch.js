var bubbles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < 10; i++) {
		bubbles[i] = new Bubble(random(0, width), random(0, height));
	}
}

function draw() {
	background(0);
	for (var i = bubbles.length - 1; i >= 0; i--) {
		bubbles[i].move();
		bubbles[i].display();
	}
}

function mouseDragged() {
	bubbles.push(new Bubble(mouseX, mouseY));
}

function mousePressed() {
	for (var i = 0; i < bubbles.length; i++) {
		bubbles[i].clicked();
	}
}

function keyPressed() {
	bubbles = [];
}
