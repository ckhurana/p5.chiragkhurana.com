function Bubble(x, y) {
	this.x = x;
	this.y = y;
  this.col = color(255, 0, 50, 50);
  this.diam = 40;

	this.move = function () {
			this.x += random(-1, 1);
			this.y += random(-1, 1);
	};

  this.clicked = function () {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < (this.diam/2))
      this.col = color(255, 50);
  };

	this.display = function () {
			stroke(255);
			fill(this.col);
			ellipse(this.x, this.y, this.diam, this.diam);
	};
}
