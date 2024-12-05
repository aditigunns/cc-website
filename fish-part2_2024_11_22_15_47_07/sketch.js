
class fish{
  constructor(x1, y1, s, spd, col){
    this.x = x1;
    this.y = y1; 
    this.size = s; 
    this.speed = spd; 
    this.colour = col;
  }
  
  draw_fish(){
    push();
    noStroke();
    fill(this.colour);
    triangle(this.x, this.y, this.x-this.size, this.y-this.size/2, this.x-this.size, this.y+this.size/2)
    ellipse(this.x, this.y, 1.5*this.size, this.size) 
    fill(255)
    circle(this.x+this.size/3, this.y, this.size/5);
    pop();
  }
  
  move_fish()
  {
    if(this.x<400){
      this.x+=this.speed;
    }
    else{
      this.x = 0; 
    }
  }
  
  grow_fish()
  {
    if(this.size<70)//checking maximum size
    {
      this.size++;//increase by 1
    }
    else
    {
      this.size = 30;//reset to minimum size
    }
  }
  
}

let fish1 = new fish(200,200,30,3);
let fish_all =[]
let fish_all_2 =[]

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i<10; i++){
    fish_all[i] = new fish(random(width), 30*i+30, 30, i+1, [0,150,0])//initialising the array with the green fish
  }
  for(let j = 0; j<10; j++){
    fish_all_2[j] = new fish(random(width), 30*j+30, 10*j, j+1, [150,0,0])//initialising the array with the red fish
  }
}

function draw() {
  background(0,0,190);
  
  for(let i = 0; i<10; i++)
  {
    fish_all[i].draw_fish();//drawing the green fish
    fish_all[i].move_fish();//moving the green fish
    
  }
  
  for(let j = 0; j<10; j++)
  {
    fish_all_2[j].draw_fish();//drawing the red fish
    fish_all_2[j].grow_fish();//gowing the red fish
    
  }
}