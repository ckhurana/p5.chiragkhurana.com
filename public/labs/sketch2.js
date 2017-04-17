var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (var i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
  }
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}
