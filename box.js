class Box {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
   score() {
    box1.score();
    box1.score();
    box1.score();
    box1.score();
    box1.score();
    box1.score();
    box1.score();
    box1.score();
    box1.score();
    box1.score();
    box1.score();
    box1.score();
    box1.score();
    box1.score();
    box1.score();
    box1.score();
  }

  score(){
    if(this.visibility<0 && this.visibility>-105){
      score++;
    }
  }

  };
  