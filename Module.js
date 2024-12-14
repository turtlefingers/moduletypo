class Module{
  // 생성자함수
  constructor(pos, img){
    this.pos = pos; // 위치
    this.vel = new p5.Vector(0,0); // 속도
    
    this.angle = random( radians(360) );
    this.defaultSize = 100;
    
    this.size = this.defaultSize;
    this.isMoving = false;
    this.origin = this.pos.copy();
    this.img = img;
    this.life = 1;
  }
  
  update(){
    let mouse = new p5.Vector(mouseX,mouseY);
    let d = mouse.dist(this.pos);
    
    if(mouseIsPressed && d < 50){
      this.life += 1;
      if(this.life > 100)this.life = 100;
    }

    
  }
  
  display(){
    push();
      translate(this.pos.x,this.pos.y);
      imageMode(CENTER);
      image(this.img,0,-this.life*0.4,this.life,this.life);
    pop();
  }
}