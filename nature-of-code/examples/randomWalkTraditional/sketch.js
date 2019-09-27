let walker;

function setup() {
  createCanvas(960,960);
  walker = new Walker();
  background(127);
}

function draw() {
  walker.step();
  walker.render();
}

class Walker {
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }

  render() {
    stroke(0);
    point(this.x,this.y);
  }

  step() {
    var choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else if (choice == 3) {
      this.y--;
    } else {
      
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}