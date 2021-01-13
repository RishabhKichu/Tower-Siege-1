class Ball {
  constructor(x, y, radius) {
    const options = {
      isStatic: false,
      restituion: 0,
      friction: 1,
      density: 1.2,
    };
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);

    this.height = height;
    this.image = loadImage("polygon.png");
    this.width = height;
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    imageMode(CENTER);
    fill(200);
    translate(pos.x, pos.y);
    rotate(angle);
    image(this.image, 0, 0, 70, 70, this.radius);

    pop();
  }
}
