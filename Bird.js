class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.SmokeImage = loadImage("sprites/smoke.png");
    
    this.Trajectory = [];
  }

  display() {
    super.display();
    if(this.body.velocity.x > 5 && this.body.position.x > 200){
    var position = [this.body.position.x, this.body.position.y];
    this.Trajectory.push(position);
    }
    for(var i = 0; i < this.Trajectory.length; i++) {
      image(this.SmokeImage, this.Trajectory[i][0], this.Trajectory[i][1]);
    }
  }
}
