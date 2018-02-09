function Ship() {
  this.x = width / 2;
  this.y = height - 30;
  this.v = 0;

  this.move = function() {
    this.x += this.v;
  }
  this.setVel = function(v) {
    this.v = v;
  }
  this.show = function() {
    fill(255, 255, 0);
    noStroke();
    rect(this.x, this.y, 15, 30);
  }

}