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
    var choice = floor(random(8));
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else if (choice == 3) {
      this.y--;
    } else if (choice == 4) {
      this.x++;
      this.y++;
    } else if (choice == 5) {
      this.x--;
      this.y++;
    } else if (choice == 6) {
      this.x--;
      this.y--;
    } else {
      this.x++;
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}