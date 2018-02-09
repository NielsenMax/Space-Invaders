var ship;
var vel = 2;
var bullets = [];
var invaders = [];
var edge = false;
var gameover = false;

function setup() {
  createCanvas(600, 600)
  ship = new Ship();
  for (var i = 0; i < 5; i++) {
    invaders[i] = (new Invader(map(i * 70 + 70, 70, 5 * 70 + 70, 70, width - 70), 60));
  }
}

function draw() {
  background(51);
  if (!gameover) {
    ship.move();
    ship.show();
    for (var i = bullets.length - 1; i >= 0; i--) {
      for (var ii = invaders.length - 1; ii >= 0; ii--) {
        if (bullets[i].hits(invaders[ii])) {
          bullets[i].toDelete = true;
          invaders.splice(ii, 1);
          for (var iii = invaders.length - 1; iii >= 0; iii--) {
            invaders[iii].setVel(1);
          }
        }
      }
      if (bullets[i].y < 0 || bullets[i].toDelete) {
        bullets.splice(i, 1);
      } else {
        bullets[i].show();
      }
    }
    for (var i = invaders.length - 1; i >= 0; i--) {
      invaders[i].show();
      invaders[i].move();
      if (invaders[i].x > width - 70 || invaders[i].x < 70) {
        edge = true;
      }
    }

    if (edge) {
      for (var i = invaders.length - 1; i >= 0; i--) {
        invaders[i].moveDown();
      }
    }
    edge = false;
    for (var i = invaders.length - 1; i >= 0; i--) {
      if (invaders[i].y > height - 70) {
        gameover = true;
      }
    }
  } else {
    fill(255, 0, 0);
    textSize(60);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    ship.setVel(-vel);
  }
  if (keyCode === RIGHT_ARROW || keyCode === 68) {
    ship.setVel(vel);
  }
  if (keyCode === 32) {
    bullets.push(new Bullet(ship.x + 7, ship.y));
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    ship.setVel(0);
  }
  if (keyCode === RIGHT_ARROW || keyCode === 68) {
    ship.setVel(0);
  }
}