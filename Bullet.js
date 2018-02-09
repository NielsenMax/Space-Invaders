function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.vel = 5;
  this.r = 15;
  this.toDelete = false;

  this.show = function(x, y) {
    this.y -= this.vel;
    fill(134, 0, 102);
    noStroke();
    ellipse(this.x, this.y, 8, 15);
  }
  this.hits = function(invader) {
    let d = dist(this.x, this.y, invader.x, invader.y)
    if (d < this.r + invader.r) {
      return true;
    }
    return false;
  }
}