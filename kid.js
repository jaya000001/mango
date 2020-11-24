class Kid{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/boy.png");
        World.add(world, this.body);
      }
      display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        stroke(255)
        angleMode(RADIANS)
        fill(255)
        image(this.image,0,0,this.width, this.height);
        pop()
      }
}