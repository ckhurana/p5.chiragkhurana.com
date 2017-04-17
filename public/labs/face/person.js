function Person(x, y, width, height, name) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.col = color(random(100, 255), random(150, 255), random(100, 255));
  this.name = name;

  this.showName = function(mX, mY) {
    if(mX > this.x && mY > this.y
      && mX < this.x + this.width
      && mY < this.y + this.height) {
      fill(this.col);
      textSize(12);
      noStroke();
      text(this.name, this.x, this.y - 5);
    }
  }

  this.show = function() {
    noFill();
    stroke(this.col);
    strokeWeight(2);
    rect(this.x, this.y, this.width, this.height);
  }
}
