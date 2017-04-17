function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.width = 20;
  this.height = 20;
  this.color = color(random(255), random(255), random(255))
  this.history = [];

  this.update = function() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    this.history.push(createVector(this.x, this.y));

    if (this.history.length > 50) {
      this.history.splice(0, 1);
    }

  };

  this.show = function() {
    //noStroke();

    noFill();
    stroke(255);

    beginShape();
    for (var i = this.history.length - 1; i >= 0; i--) {
      var pos = this.history[i];
      //fill(255, 100);
      //ellipse(this.history[i].x, this.history[i].y, i, i);

      vertex(pos.x, pos.y);
    }
    endShape();

    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.width, this.height);

  };
}
