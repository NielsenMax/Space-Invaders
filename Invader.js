function Invader(x, y) {
  this.x = x;
  this.y = y;
  this.vel = 1;
  this.r = 70


  this.show = function() {
    this.move();
    fill(0, 115, 0);
    ellipse(this.x, this.y, 70, 40);
  }
  this.setVel = function(v) {
    this.vel += v;
  }
  this.move = function() {
    this.x += this.vel;
  }
  this.moveDown = function() {

    this.vel *= -1;
    this.y += 40;

  }
}