class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,80,50);
    this.image=loadImage("poly.png");
  }

  display() {
   /* this.body.position.x = mouseX;
    this.body.position.y = mouseY;*/
    super.display();

  }
}