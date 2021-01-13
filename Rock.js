class Block {
  constructor(x, y) {
    const options = {
      isStatic: false,
      restituion: 0,
      friction: 1,
      density: 1.2,
    };
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    World.add(world, this.body);

    this.height = 30;
    this.width = 40;
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    ellipseMode(CENTER);
    fill(200);
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.height, this.width);

    pop();
  }
}
