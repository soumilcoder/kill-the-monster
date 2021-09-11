class Alien {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.5
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    this.image = loadImage("images/Monster-01.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;

    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    strokeWeight(3);
      stroke("white");
      fill(255,255,255);
      
    //ellipse(0, 0, this.width, this.height);
    imageMode(CENTER);
    image(this.image, 0, 0, 100, 100)
    pop();
  }
};
